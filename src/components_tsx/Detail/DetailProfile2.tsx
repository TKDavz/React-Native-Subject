import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TopProfile from './Module/TopProfile';
import DecriptionProfile from './Module/DecriptionProfile';
import SelectTab, { SelectedItemType } from '../Button/SelectTab';

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

const DetailProfile2 = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ height: 1500, margin: 10, backgroundColor: "#ff00ff" }} />
    );
  };

  const renderHeader = () => {
    return (
      <SelectTab
        selectedItemArrayValues={listTypeArrayValues}
      />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <>
        <TopProfile style={{ paddingVertical: 10 }} />
        <DecriptionProfile />
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={renderItem}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  topProfileContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  topProfile: {
    paddingVertical: 10,
  },
  decriptionProfile: {
    // Add your styles for DecriptionProfile here
  },
  selectTab: {
    // Add your styles for SelectTab here
  },
});

export default DetailProfile2;
