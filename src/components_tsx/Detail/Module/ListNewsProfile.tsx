import { StyleSheet, Text, View, ViewStyle, FlatList, StyleProp } from 'react-native'
import React from 'react'

import moment, {MomentInputObject, Moment} from 'moment'


import SelectTab from '../../Button/SelectTab'

import { SelectedItemType } from '../../Button/SelectTab';
import NewsCartHorizontal from '../../Cart/NewsCartHorizontal';

export const listTypeStringValues = {
    news: "News",
    recent: "Recent"
}

type typeListType = typeof listTypeStringValues[keyof typeof listTypeStringValues];

const listTypeArrayValues: SelectedItemType[] = Object.entries(listTypeStringValues).map(([key, value], index) => {
    return {
        id: index,
        nameType: value,
        active: false
    };
});

type ListNewsProfileProps = {
    isDarkmode?: boolean | undefined;
    style?: ViewStyle | ViewStyle[] | undefined;

    listNews?: any[];

    onItemNewsPress: (item: any) => void;

    listTypeStart?: typeListType;
    onChangeListType?: (listType: typeListType) => void;
    onFlatListScroll?: (event: any) => void;
    showsHorizontalScrollIndicator?: boolean;
    showsVerticalScrollIndicator? : boolean;
    refreshing?: boolean
    onRefresh?: () => void; 
}


const ListNewsProfile = (props: ListNewsProfileProps) => {

    const listNews = props.listNews;

const parseTime = (timeString : Moment | Date | string | number | (number | string)[] | MomentInputObject | null | undefined) => {
    const parsedTime = moment(timeString);
    return parsedTime.fromNow();
}



    return (
        <View style={[{ flex: 0 }, props.style]}>
            <SelectTab
                isDarkmode={props.isDarkmode}
                selectedItemStart={props.listTypeStart || listTypeStringValues.recent}
                selectedItemArrayValues={listTypeArrayValues}
                onChangeSelectedItem={(item) => props.onChangeListType && props.onChangeListType(item as typeListType)}
            />

            <FlatList
                data={listNews}
                refreshing={props.refreshing}
                onRefresh={props.onRefresh}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1 }}
                renderItem={({ item }) => {
                    return (

                        <NewsCartHorizontal
                            key={item._id}
                            newsType='Europe'
                            newsImage={{ uri: item.image }}
                            newsTitle={item.title}
                            newsTime={parseTime(item.createdAt)}
                            newsLogoAuthor={{ uri: item.createdBy.avatar }}
                            newsAuthorName={item.createdBy.name}
                            onPress={() => props.onItemNewsPress(item)}
                        />
                    )
                }}
            />

            {/* <FlatList
                ref={flatListRef}
                data={listNews}
                keyExtractor={(item, index) => index.toString()}
                style={{ flex: 1, backgroundColor: "red" }}
                renderItem={({ item }) => (
                    <View style={{ height: 1500, margin: 10, backgroundColor: "#ff00ff" }} />
                )}
                onScroll={(event) => props.onFlatListScroll && props.onFlatListScroll(event.nativeEvent)}
                scrollEventThrottle={16}
            /> */}
        </View>
    )
}

export default ListNewsProfile

const styles = StyleSheet.create({})