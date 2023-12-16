import { StyleSheet, Text, View, Image, ViewStyle, ImageSourcePropType, ImageURISource } from 'react-native'
import React from 'react'

import { textColor } from '../../../Root/RootValues'
import { ColorTextType } from '../../../Root/RootTypes'

import { flextStyles } from '../../../Styles/FlexStyles'
import { textStyles } from '../../../Styles/TextStyle'
import { IconImage } from '../../../assets/icon_svg/svg'

type TopProfileProps = {
    isDarkmode?: boolean | undefined,
    style?: ViewStyle | ViewStyle[] | undefined,

    image?: ImageSourcePropType | undefined,
    followers?: number | undefined,
    following?: number | undefined,
    news?: number,
}


const TopProfile = (props: TopProfileProps) => {
    const { isDarkmode, image, followers, following, news } = props;

    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

    const imageUri = props.image as ImageURISource;


    return (
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { flex: 0 }, props.style]}>

            <View style={[flextStyles.columnFlexBox]}>
                <View style={[flextStyles.columnFlexBox, styles.image]}>

                    {
                        (!!!props.image || !!!imageUri?.uri) ? <IconImage width={16} height={16} fill={colorText.body} />
                            : <Image source={props.image as ImageSourcePropType} style={[styles.image]} />

                    }

                </View>
            </View>

            <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { flex: 1 }]}>
                <View style={[flextStyles.columnFlexBox, { gap: 5 }]}>
                    <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>{followers || "?"}</Text>
                    <Text style={[textStyles.textMedium, { color: colorText.body }]}>Followers</Text>
                </View>

                <View style={[flextStyles.columnFlexBox, { gap: 5 }]}>
                    <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>{following || "?"}</Text>
                    <Text style={[textStyles.textMedium, { color: colorText.body }]}>Following</Text>
                </View>

                <View style={[flextStyles.columnFlexBox, { gap: 5 }]}>
                    <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>{news || "?"}</Text>
                    <Text style={[textStyles.textMedium, { color: colorText.body }]}>News</Text>
                </View>
            </View>

        </View>
    )
}

export default TopProfile

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
    }
});