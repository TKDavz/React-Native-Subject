import { StyleSheet, Text, View, Image, Pressable, ViewStyle, LayoutChangeEvent, ImageSourcePropType } from 'react-native'
import React from 'react'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'

import { colorsDefault, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import { IconImage, IconMoreHorizontal, IconTime } from '../../assets/icon_svg/svg'
import { buttonStyles } from '../../Styles/ButtonStyles'

import { NewsCartProps } from './CartTypeProps'

import { imageStyles } from '../../Styles/ImageStyles'


const NewsCartHorizontal2 = (props: NewsCartProps) => {
    const isDarkmode = props.isDarkmode === undefined ? false : props.isDarkmode;
    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;


    return (
        // // <View style={[flextStyles.columnFlexBox, flextStyles.justifyContentCenter, { marginVertical: 11, gap: 10 }]}>
        // //     <View style={[flextStyles.rowFlexBox, !props.newsImage && styles.noImage]}>
        // //         {

        // //             props.newsImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
        // //                 : <Image style={[imageStyles.newsImageHorizontal]} source={props.newsImage as ImageSourcePropType} />

        // //         }
        // //     </View>


        // <View style={[flextStyles.columnFlexBox, { marginVertical: 11, gap: 10 }, props.style]}>
        //     <View style={[flextStyles.rowFlexBox, { width: "100%", height: 100, backgroundColor: "#00ffff", borderRadius: 6 }, !props.newsImage && styles.noImage]}>
        //         {

        //             props.newsImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
        //                 : <Image style={[imageStyles.newsImageHorizontal, { width: "100%", }]} source={props.newsImage as ImageSourcePropType} />

        //         }
        //     </View>



        //     <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { flex: 1, gap: 5 }]}>
        //         <Text style={[textStyles.textXSmall, { color: colorText.body }]}
        //             numberOfLines={1}
        //             ellipsizeMode="tail">
        //             {

        //                 props.newsType === undefined ? "News Type aaaaaaaaaaaaaa" : props.newsType

        //             }
        //         </Text>

        //         <Text style={[textStyles.textMedium, { color: colorText.tilte }]}
        //             numberOfLines={2}
        //             ellipsizeMode="tail">
        //             {

        //                 props.newsTitle === undefined ? "News Title" : props.newsTitle

        //             }
        //         </Text>

        //         <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { width: "100%" }]}>
        //             <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart]}>
        //                 <View style={[flextStyles.rowFlexBox]}>
        //                     {

        //                         props.newsLogoAuthor === undefined ? <IconImage width={20} height={20} fill={colorText.body} />
        //                             : <Image source={props.newsLogoAuthor as ImageSourcePropType} style={[imageStyles.newsAuthorLogo]}></Image>

        //                     }
        //                     <Text style={[textStyles.textXSmall, textStyles.link, { color: colorText.body }]}>
        //                         {

        //                             props.newsAuthorName === undefined ? "Author Name" : props.newsAuthorName

        //                         }
        //                     </Text>
        //                 </View>

        //                 <View style={[flextStyles.rowFlexBox, { gap: 5 }]}>
        //                     <IconTime width={11.67} height={11.67} fill={colorText.body} />
        //                     <Text style={[textStyles.textXSmall, { color: colorText.body }]}>
        //                         {

        //                             props.newsTime === undefined ? "Time" : props.newsTime

        //                         }
        //                     </Text>
        //                 </View>
        //             </View>

        //             <Pressable style={[buttonStyles.iconButton]}>
        //                 <IconMoreHorizontal width={10} fill={colorText.body} />
        //             </Pressable>
        //         </View>
        //     </View>
        //  </View>

<View style={[{display: "flex" ,alignItems: "flex-start", flexDirection :"column"  ,justifyContent: "center"} ,{ gap: 10 }]}>
        {/* // <View> */}
            <Text style={{ width: "100%", textAlign: "center", backgroundColor: "#ffff00" }}>NewsCartHorizontal2</Text>

            <View style={[flextStyles.columnFlexBox, { height: 200 , marginVertical: 11, gap: 10, backgroundColor: "#666600" }, props.style]}>
                {
                    props.newsImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
                        : <Image style={[imageStyles.newsImageHorizontal, { width: "100%", }]} source={props.newsImage as ImageSourcePropType} />

                }
            </View>

            <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, {  gap: 5 }]}> 
            {/* <View> */}

                <Text style={[textStyles.textXSmall, { color: colorText.body }]}

                    ellipsizeMode="tail">
                    {

                        "News Type"

                    }
                </Text>

                <Text style={[textStyles.textMedium, { color: colorText.tilte }]}

                    ellipsizeMode="tail">
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

        </View>
    )
}

export default NewsCartHorizontal2

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