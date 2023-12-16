import {
  Image, StyleSheet, Text,
  TextInput, View, TouchableOpacity, FlatList
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import { searchNews } from '../../NewsService'

import CustomInput from '../../../components_tsx/Input/CustomInput';
import SelectTab from '../../../components_tsx/Button/SelectTab';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import NewsCartHorizontal from '../../../components_tsx/Cart/NewsCartHorizontal';

import moment from 'moment'

const Bookmark = (props) => {
  const {navigation} = props;

  const [text, setText] = useState('')
  const [showClearIcon, setShowClearIcon] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const [beginSearch, setBeginSearch] = useState(false);

  const searchByTitle = async (text) => {
    setIsLoading(true)
    const results = await searchNews(text)
    setSearchResults(results.data)
    setIsLoading(false)
  }
  const parseTime = (timeString) => {
    const parsedTime = moment(timeString);
    return parsedTime.fromNow();
}

  useEffect(() => {
    let timer
    if (text.length > 0) {
      timer = setTimeout(() => {
        searchByTitle(text)
      }, 900);
    }
    return () => clearTimeout(timer)
  }, [beginSearch])


  const renderItem = (value) => {
    const { item } = value;
    return (
      // <Latest
      //   onPress={() => props.navigation.navigate('Detail', { id: item._id })}
      //   thumb={{ uri: item.image }}
      //   title={item.title}
      //   avatar={{ uri: item.createdBy.avatar }}
      //   author={item.createdBy.name}
      //   time={item.createdAt}
      // />
      <NewsCartHorizontal
      key={item._id}
      newsType='Europe'
      newsImage={{ uri: item.image }}
      newsTitle={item.title}
      newsTime={ parseTime( item.createdAt)}
      newsLogoAuthor={{ uri: item.createdBy.avatar }}
      newsAuthorName={item.createdBy.name}
      onPress={() => navigation.navigate( "Home" , {
        screen: "Detail",
        params: { id: item._id, createdBy: item.createdBy },
      } )}
  />

    )
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.searchContainer}> */}
      {/* <Image source={require('../../../assets/images/searchIcon.png')} style={{ margin : 5 }} />
              <TextInput
                  value={text}
                  style={styles.input}
                  onChangeText={handleClear}
                  placeholder="Search"
                  placeholderTextColor={'gray'}
              />
              {showClearIcon &&
                  (<TouchableOpacity onPress={
                      () => {
                          setText('')
                          setShowClearIcon(false)
                      }
                  }>
                      <Image source={require('../../../assets/images/xIcon.png')} />
                  </TouchableOpacity>)}
          </View> */}

      <CustomInput
        type='search'
        placeholder="Search"
        haveFilter={true}
        value={text}
        onChangeText={setText}
        onBlur={() => setBeginSearch(!beginSearch)}
      />

      <SelectTab
        selectedItemArrayValues={[
          { id: 1, nameType: 'News', active: true },
          { id: 2, nameType: 'Topic', active: false },
          { id: 3, nameType: "Author", active: false },
        ]}
        onChangeSelectedItem={(item) => console.log(item)}
      />


      <View style={{ flex: 1, width: '100%' }}>
        {
          isLoading ? <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
            indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
          /> :
            (<FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshing={isLoading}
              data={searchResults}
              renderItem={renderItem} //adapter
              keyExtractor={(item, index) => item._id} />)}
      </View>
    </View>
    // </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  txtTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000',
    marginTop: 16,
    borderBottomColor: '#1877F2',
    borderBottomWidth: 4,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#000000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4E4B66',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
})