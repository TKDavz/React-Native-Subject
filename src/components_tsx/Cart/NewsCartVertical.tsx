import { StyleSheet, Text, View, Pressable, Image, ImageSourcePropType, ViewStyle, LayoutChangeEvent, TouchableOpacity } from 'react-native'
import React from 'react'


import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'

import { ColorTextType } from '../../Root/RootTypes'
import { colorsDefault, textColor } from '../../Root/RootValues'

import { IconImage, IconMoreHorizontal, IconTime } from '../../assets/icon_svg/svg'
import { buttonStyles } from '../../Styles/ButtonStyles'
import { imageStyles } from '../../Styles/ImageStyles'

import { NewsCartProps } from './CartTypeProps'


const NewsCartVertical = (props: NewsCartProps) => {
    const isDarkmode = props.isDarkmode === undefined ? false : props.isDarkmode;

    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;


    return (
        <TouchableOpacity style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart , { marginVertical: 11, gap: 10}, props.style]}
        onPress={props.onPress}>
    

            <View style={[flextStyles.rowFlexBox, imageStyles.newsImageVertical, { width: "100%" , backgroundColor: "#00ffff", borderRadius: 6} ,!props.newsImage && styles.noImage]}>
                {

                    props.newsImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
                        : <Image style={[imageStyles.newsImageVertical, { width: "100%"}]} source={props.newsImage as ImageSourcePropType}/>
                            
                }
            </View>



            <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { gap: 5 }]}>
                <Text style={[textStyles.textXSmall, { color: colorText.body }]}>
                    {

                        props.newsType === undefined ? "News Type" : props.newsType

                    }
                </Text>

                <Text style={[textStyles.textMedium, , { color: colorText.tilte }]}>
                    {

                        props.newsTitle === undefined ? "News Title" : props.newsTitle

                    }
                </Text>

                <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { width: "100%" }]}>
                    <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart]}>
                        <View style={[flextStyles.rowFlexBox]}>

                            {

                                props.newsLogoAuthor === undefined ? <IconImage width={20} height={20} fill={colorText.body} />
                                    : <Image source={props.newsLogoAuthor as ImageSourcePropType} style={[imageStyles.newsAuthorLogo]}></Image>

                            }

                            <Text style={[textStyles.textXSmall, textStyles.link, { color: colorText.body }]}>
                                {

                                    props.newsAuthorName === undefined ? "Author Name" : props.newsAuthorName

                                }
                            </Text>
                        </View>

                        <View style={[flextStyles.rowFlexBox, { gap: 5 }]}>
                            <IconTime width={11.67} height={11.67} fill={colorText.body} />
                            <Text style={[textStyles.textXSmall, { color: colorText.body }]}>
                                {

                                    props.newsTime === undefined ? "Time" : props.newsTime

                                }
                            </Text>
                        </View>
                    </View>

                    <Pressable style={[buttonStyles.iconButton]}>
                        <IconMoreHorizontal width={10} fill={colorText.body} />
                    </Pressable>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NewsCartVertical

const styles = StyleSheet.create({
    imageLogo: {
        width: 20,
        height: 20
    },

    noImage: {
        // backgroundColor: colorsDefault.grayscaleColor_Group.backgroudImage,
        // width: 364,
        borderRadius: 6,
        backgroundColor: colorsDefault.lightGray,
        // height: 163,
    },

    imgNews: {
        maxWidth: 364,
        maxHeight: 163,

        backgroundColor: colorsDefault.lightGray,
        borderRadius: 6
    }
})