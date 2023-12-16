import {
  Image, Pressable,
  StyleSheet, Text, View, TouchableHighlight, Dimensions, TouchableOpacity, FlatList,
  KeyboardAvoidingView
} from 'react-native'

import React, { useEffect, useState, useContext } from 'react'
import { getMyNews } from '../../../News/NewsService';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UserContext } from '../../UserContext';

import Spinner from 'react-native-loading-spinner-overlay';
import ToolBar from '../../../components_tsx/Button/ToolBar';
import TopProfile from '../../../components_tsx/Detail/Module/TopProfile';
import DecriptionProfile from '../../../components_tsx/Detail/Module/DecriptionProfile';
import ListNewsProfile from '../../../components_tsx/Detail/Module/ListNewsProfile';
import { IconPlus } from '../../../assets/icon_svg/svg';
import { flextStyles } from '../../../Styles/FlexStyles';

const Tab = createMaterialTopTabNavigator();

const ThongKe = ({ title, subTitle }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontWeight: '600', color: '#000', }}>{title}</Text>
      <Text style={{ color: '#4E4B66', }}>{subTitle}</Text>
    </View>
  )
}

const renderItem = ({ item }, navigation) => {


  return (
    <Latest
      onPress={() => navigation.navigate('Home', {
        screen: 'Detail',
        params: { id: item._id, createdBy: item.createdBy }
      })}
      thumb={{ uri: item.image }}
      title={item.title}
      avatar={{ uri: item.createdBy.avatar }}
      author={item.createdBy.name}
      time={item.createdAt}
    />
  )
}
const Profile = (props) => {
  const { user: currentUser } = useContext(UserContext);
  const { navigation } = props;
  const [newList, setNewList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const getMyListNews = async () => {
    setLoading(true);
    const res = await getMyNews();
    if (res?.statusCode === 200) {
      const createdBy = { name: currentUser.name, avatar: currentUser.avatar }
      setNewList(res.data.map(
        (item) => {
          return { ...item, createdBy }
        }
      ));
    }
    setLoading(false);
  }

  useEffect(() => {
    getMyListNews();
  }, [])

  const MyNewList = (props) => {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        {

          loading ?
            <Spinner
              visible={loading}
              textContent={'Loading...'}
              textStyle={{ color: '#FFF' }}
              size={"large"}
              indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
            />
            :
            (<FlatList
              style={{ backgroundColor: '#fff' }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              refreshing={loading}
              onRefresh={getMyListNews}
              data={newList}
              renderItem={(item) => renderItem(item, props.navigation)}
              keyExtractor={(item, index) => item._id}
            />)

        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={[{ display: "flex", flex: 1 }]}>
        <ToolBar
          title='Profile'
          type="setting"

          onPressRightIconButton={() => navigation.navigate('Setting')}
        />

        <TopProfile
          image={{ uri: currentUser.avatar }}
          followers={23}
          following={5}
          news={5}
          style={[{ paddingVertical: 10 }]} />

        <DecriptionProfile
          onLeftButtonPress={() => navigation.navigate('EditProfile')} />
        {/* 
        {
          loading &&
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
            size={"large"}
            indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
          />
        } */}

        <ListNewsProfile
          listNews={newList}
          onRefresh={getMyListNews}
          refreshing={loading}
          style={{ flex: 1, marginBottom: 10 }}
          onChangeListType={(type) => {
            setLoading(!refreshing);
          }}
          onItemNewsPress={(item) => {
            navigation.navigate("Home", {
              screen: 'Detail',
              params: { id: item._id, createdBy: item.createdBy }
            })
          }
          }

        />


        <TouchableOpacity onPress={() => navigation.navigate('CreateNews')} style={[{
          position: 'absolute', right: 24, bottom: 24,
          width: 54, height: 54, borderRadius: 27, elevation: 5,
          backgroundColor: '#1877F2'
        }, flextStyles.rowFlexBox]}>

          <IconPlus color={"#ffffff"} />

        </TouchableOpacity>

      </View>

    </View>

  )
}

export default Profile

const styles = StyleSheet.create({

  leftSwipe: {
    marginRight: 10,
    backgroundColor: '#F1F2F3',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },

  rightSwipe: {
    backgroundColor: '#F1F2F3',
    marginLeft: 10,
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },



  txtBtnEdit: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#FFFFFF',
  },
  btnEdit: {
    width: ((Dimensions.get('window').width - 48 - 16) / 2),
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  txtName: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  infomationContainer: {
    marginBottom: 16,
  },

  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  txtProfile: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  newsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
  }
})