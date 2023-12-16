import { StyleSheet, Text, View, Pressable, Image, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'


import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'

import { colorsDefault, buttonText, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import CustomButton from '../Button/CustomButton'

import { NotificationCartProps } from './CartTypeProps'
import { IconImage } from '../../assets/icon_svg/svg'


const NotificationCart = (props: NotificationCartProps) => {
    //lấy followButtonText từ RootValue
    const followButtonText = buttonText.follow;

    // tạo useState để lưu trạng thái follow
    const [isFollowed, setIsFollowed] = useState(false);

    // tạo hàm follow để thay đổi trạng thái follow
    const follow = () => {
        setIsFollowed(!isFollowed);
        props.onPress && props.onPress();
    }

    const type = props.type || "default";
    const isDarkmode = props.isDarkmode || false;
    const authorName = props.authorName || "Author name";
    const bodyText = props.bodyText || (props.type === "follow" ? "is now following you" : "Body text");
    const time = props.time || "?";

    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

    return (
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, styles.box]}>
            <View style={[flextStyles.rowFlexBox]}>
                {

                    props.authorImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
                        : typeof props.authorImage === "object" ? <Image style={styles.imageAuthor} source={props.authorImage as ImageSourcePropType} />
                            : props.authorImage


                }
            </View>

            <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, flextStyles.justifyContentSpaceBetween, { flex: 1 }]}>


                <Text style={[textStyles.textSmall, {color: colorText.tilte}]}  >
                    <Text style={[textStyles.textMedium, textStyles.link, {color: colorText.tilte} ]}>
                        {authorName}
                    </Text>
                    {
                        "  "
                    }
                    {bodyText}
                </Text>

                <Text style={[textStyles.textSmall,  {color: colorText.body} ]} >
                    {
                        time + " ago"
                    }
                </Text>
            </View>

            {
                type === "follow" &&
                <CustomButton
                    title={isFollowed ? followButtonText.areFollowing : followButtonText.notFollowedYet}
                    onPress={follow}
                    type={isFollowed ? "primary" : "outline"}
                    typeIcon={isFollowed ? "left" : "right"}
                />
            }

        </View>
    )
}

export default NotificationCart

const styles = StyleSheet.create({
    imageAuthor: {
        width: 70,
        height: 70,
        borderRadius: 6,
    },

    buttonFollow: {
        minWidth: 95,
    },

    box: {
        backgroundColor: colorsDefault.grayscaleColor_Group.backgroudImage,
        marginVertical: 11,
        gap: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 6,
    }
})