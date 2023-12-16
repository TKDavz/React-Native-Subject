import { StyleSheet, Text, View, Image, Pressable, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'

import { buttonText, textColor } from '../../Root/RootValues'
import { ColorTextType } from '../../Root/RootTypes'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'

import CustomButton from '../Button/CustomButton'

import { AuthorCarProps } from './CartTypeProps'
import { IconImage } from '../../assets/icon_svg/svg'

const AuthorCarHorizontal = (props: AuthorCarProps) => {
    //lấy followButtonText từ RootValue
    const followButtonText = buttonText.follow;

    // tạo useState để lưu trạng thái follow
    const [isFollowed, setIsFollowed] = useState(false);

    // tạo hàm follow để thay đổi trạng thái follow
    const follow = () => {
        setIsFollowed(!isFollowed);
    }

    const isDarkmode = props.isDarkmode ? props.isDarkmode : false;
    const colorText = isDarkmode ? textColor.darkmode : textColor.lightmode;

    const authorName = props.authorName ? props.authorName : "Author name";
    const authorFollowers = props.authorFollowers ? props.authorFollowers : 0;

    return (
        <View style={[flextStyles.columnFlexBox, flextStyles.justifyContentSpaceBetween, { marginVertical: 11, paddingHorizontal: 10, gap: 10 }]}>
            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentCenter]}>
                {

                    props.authorImage === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
                        : typeof props.authorImage === "object" ? <Image style={styles.imageAuthor} source={props.authorImage as ImageSourcePropType} />
                            : props.authorImage


                }
            </View>

            <View style={[flextStyles.columnFlexBox, flextStyles.justifyContentSpaceBetween]}>
            <Text style={[textStyles.textMedium, {color: colorText.tilte}]}>
                    {
                        authorName
                    }
                </Text>

                {/* <Text style={[textStyles.textSmall, {color: colorText.body}]}  >
                    {
                        authorFollowers + " Followers"
                    }
                </Text> */}
            </View>

            <CustomButton
                title={isFollowed ? followButtonText.areFollowing : followButtonText.notFollowedYet}
                onPress={follow}
                type={isFollowed ? "primary" : "outline"}
                typeIcon={isFollowed ? "left" : "right"}
            />

        </View>
    )
}

export default AuthorCarHorizontal

const styles = StyleSheet.create({
    imageAuthor: {
        width: 70,
        height: 70,
        borderRadius: 6,
        backgroundColor: "transparent",
    },

    buttonFollow: {
        minWidth: 95,
    },

    boxImage: {

    }
});