import { StyleSheet, Text, View, Image, Pressable, ViewStyle, LayoutChangeEvent, ImageSourcePropType, TouchableOpacity, ImageURISource } from 'react-native'
import React from 'react'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'
import { colorsDefault, textColor } from '../../Root/RootValues'

import { IconImage, IconMoreHorizontal, IconTime } from '../../assets/icon_svg/svg'
import { buttonStyles } from '../../Styles/ButtonStyles'

import { NewsCartProps } from './CartTypeProps'

import { ColorTextType } from '../../Root/RootTypes'
import { imageStyles } from '../../Styles/ImageStyles'


const NewsCartHorizontal = (props: NewsCartProps) => {
    const isDarkmode = props.isDarkmode === undefined ? false : props.isDarkmode;
    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

    const newsImageUri: ImageURISource = props.newsImage as ImageURISource;
    const authorUri = props.newsLogoAuthor as ImageURISource;

    const newsLogoAuthor = props.newsLogoAuthor ?? null;
    const newsImage = props.newsImage ?? null;


    return (
        <TouchableOpacity style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { marginVertical: 11, gap: 10 }]}
            onPress={props.onPress}
        >
            <View style={[flextStyles.rowFlexBox, styles.noImage]}>
                {

                    (!!!newsImageUri?.uri || !!!newsImage ) ? <IconImage width={30} height={30} fill={colorText.body} />
                        : <Image style={[imageStyles.newsImageHorizontal]} source={props.newsImage as ImageSourcePropType} />

                }
            </View>

            <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { flex: 1, gap: 5 }]}>
                <Text style={[textStyles.textXSmall, { color: colorText.body }]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {

                        props.newsType === undefined ? "News Type" : props.newsType

                    }
                </Text>

                <Text style={[textStyles.textMedium, { color: colorText.tilte }]}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {

                        props.newsTitle === undefined ? "News Title" : props.newsTitle

                    }
                </Text>

                <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { width: "100%" }]}>
                    <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart]}>
                        <View style={[flextStyles.rowFlexBox]}>
                            {
                                (!!!newsLogoAuthor || !!!authorUri?.uri) ? <IconImage width={16} height={16} fill={colorText.body} />
                                    : <Image source={props.newsLogoAuthor as ImageSourcePropType} style={[imageStyles.newsAuthorLogo]} />

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

export default NewsCartHorizontal

const styles = StyleSheet.create({
    imageLogo: {
        width: 20,
        height: 20
    },

    noImage: {
        backgroundColor: colorsDefault.grayscaleColor_Group.backgroudImage,
        borderRadius: 6,
        width: 96,
        height: 96
    },

    imgNews: {
        height: 96,
        width: 96,
        backgroundColor: colorsDefault.grayscaleColor_Group.backgroudImage,
        borderRadius: 6
    }
})