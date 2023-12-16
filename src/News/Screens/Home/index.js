import { View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'

import moment from 'moment'

import { getNews } from '../../NewsService'


import { flextStyles } from '../../../Styles/FlexStyles'
import { textStyles } from '../../../Styles/TextStyle'

import { IconNotification, VectorAppLogo } from '../../../assets/icon_svg/svg'

import CustomInput from '../../../components_tsx/Input/CustomInput'
import NewsCartVertical from '../../../components_tsx/Cart/NewsCartVertical'
import SelectTab from '../../../components_tsx/Button/SelectTab'
import NewsCartHorizontal from '../../../components_tsx/Cart/NewsCartHorizontal'



const list = [
    {
        id: 0,
        nameType: "All",
        active: true,
    }, {
        id: 1,
        nameType: "Sports",
        active: false,

    }, {
        id: 2,
        nameType: "Politics",
        active: false,
    }, {
        id: 3,
        nameType: "Bussiness",
        active: false,
    }, {
        id: 4,
        nameType: "Health",
        active: false,
    }, {
        id: 5,
        nameType: "Travel",
        active: false,
    }, {
        id: 6,
        nameType: "Science",
        active: false,
    }, {
        id: 7,
        nameType: "Fashion",
        active: false,
    },
]

const Home = (props) => {
    useEffect(() => {
        getNewsData();
    }, [])

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNewsData = async () => {
        setLoading(true);
        const res = await getNews();
        if (res?.statusCode === 200) {
            setNews(res.data);

        }
        setLoading(false);
    }

    const parseTime = (timeString) => {
        const parsedTime = moment(timeString);
        return parsedTime.fromNow();
    }

    return (
        <ScrollView style={styles.body}>


            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, styles.topLogoBox]}>
                <VectorAppLogo width={99} height={30} />

                <Pressable style={styles.pressIcon}>
                    <IconNotification />
                </Pressable>
            </View>

            <CustomInput
                placeholder="Search"
                type='search'
                haveFilter={true}
            />

            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween]}>
                <Text style={[textStyles.textMedium, textStyles.link]}>Trending</Text>
                <Text>See all</Text>
            </View>

            <NewsCartVertical
                newsType='Europe'
                newsImage={require('../../../assets/images/trending1.png')}
                newsTitle="Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil"
                newsTime="4h ago"
                newsLogoAuthor={require('../../../assets/images/logoBBC.png')}
                newsAuthorName="BBC News"
            />


            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween]}>
                <Text style={[textStyles.textMedium, textStyles.link]}>Latest</Text>
                <Text>See all</Text>
            </View>

            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart]}>
                <SelectTab
                    selectedItemArrayValues={list}
                    styleItemActive={{ height: 2, top: 4, paddingHorizontal: 5 }}
                />
            </View>

            <View style={{ paddingBottom: 30 }}>
                {news.map((item, index) => (

                    <NewsCartHorizontal
                        key={item._id}
                        newsType='Europe'
                        newsImage={{ uri: item.image }}
                        newsTitle={item.title}
                        newsTime={ parseTime( item.createdAt)}
                        newsLogoAuthor={{ uri: item.createdBy.avatar }}
                        newsAuthorName={item.createdBy.name}
                        onPress={() => props.navigation.navigate('Detail', { id: item._id, createdBy: item.createdBy })}
                    />

                ))}
            </View>




        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({

    body: {
        padding: 24,
        backgroundColor: "#ffffff",
        position: "relative",
        marginBottom: 20
    },

    logo: {
        width: 99,
        height: 30,
    },

    topLogoBox: {
        marginBottom: 26,
    },


    titleM: {
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: "#000000",
    },

    pressIcon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        width: 32,
        height: 32,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "blue",

        borderRadius: 6,

        flexGrow: 0,
    },

})
