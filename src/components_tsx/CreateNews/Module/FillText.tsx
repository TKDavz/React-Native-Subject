import { StyleSheet, Text, View, TextInput, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'

// tự Growing Text Input
// https://stackoverflow.com/questions/41004631/react-native-auto-expanding-textinput
//


import { textStyles } from '../../../Styles/TextStyle'
import { flextStyles } from '../../../Styles/FlexStyles'

type FillTextProps = {
    style?: ViewStyle | ViewStyle[] | undefined,
    titleValue?: string | undefined,
    contentValue?: string | undefined,
    onChangeTitle?: (text: string) => void,
    onChangeContent?: (text: string) => void,
}

const FillText = (props: FillTextProps) => {
    const title= props.titleValue ? props.titleValue : "";
    const content= props.contentValue ? props.contentValue : "";

    const handleTitleChange = (text: string) => {

        props.onChangeTitle && props.onChangeTitle(text);

    }

    const handleContentChange = (text: string) => {

        props.onChangeContent && props.onChangeContent(text);
    }


    return (
        <View style={[flextStyles.columnFlexBox, flextStyles.justifyContentFlexStart, props.style]}>

            <TextInput
                style={[textStyles.displaySmall, styles.title, { verticalAlign: 'auto', width: "100%" }, { borderBottomWidth: 0.5 }, { borderBottomColor: "red" }]}
                multiline={true}
                autoCapitalize="sentences"
                underlineColorAndroid="transparent"
                value={title}
                onChangeText={handleTitleChange}
                placeholder="News title" />


            {/* <Text style={[{ borderBottomWidth: 0.5 }, { borderBottomColor: "red" }]} />  */}

            <TextInput
                style={[textStyles.textMedium, styles.content, { verticalAlign: 'top', width: "100%" }]}
                multiline={true}
                autoCapitalize="sentences"
                underlineColorAndroid="transparent"
                value={content}
                onChangeText={handleContentChange}
                placeholder="Add News/Article" />

        </View>
    )
}

export default FillText

const styles = StyleSheet.create({
    title: {

    },

    content: {

    },


})