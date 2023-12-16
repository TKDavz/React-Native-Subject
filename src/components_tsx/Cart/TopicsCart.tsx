import { StyleSheet, Text, View, Image, Pressable, ViewStyle, ImageSourcePropType } from 'react-native'
import React from 'react'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'

import CusButton from '../Button/CustomButton'
import { IconImage } from '../../assets/icon_svg/svg'

import { ColorTextType } from '../../Root/RootTypes'
import { colorsDefault, buttonText , textColor} from '../../Root/RootValues'

import { TopicsCartProps } from './CartTypeProps'

const TopicsCart = (props: TopicsCartProps) => {
    //lấy saveButtonText từ RootValue
    const saveButtonText = buttonText.save;

    // tạo useState để lưu trạng thái save
    const [isSaved, setIsSaved] = React.useState(false)

    // tạo hàm save để thay đổi trạng thái save
    const save = () => {
        setIsSaved(!isSaved);
        props.onPress && props.onPress();
    }

    const isDarkmode = props.isDarkmode === undefined ? false : props.isDarkmode;
    const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

    return (
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { marginVertical: 11, paddingHorizontal: 10, gap: 10 }]}>
            <View style={[flextStyles.rowFlexBox, styles.imageTopics]}>
                {
                    props.imageTopics === undefined ? <IconImage width={30} height={30} fill={colorText.body} />
                        : typeof props.imageTopics === "object" ? <Image style={styles.imageTopics } source={props.imageTopics as ImageSourcePropType} />
                            : props.imageTopics

                }
            </View>

            <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, flextStyles.justifyContentSpaceBetween, { flex: 1 }]}>
                <Text style={[textStyles.textMedium,  {color: colorText.tilte}]}>
                    {
                        props.topicTitle ? props.topicTitle : "Topic title"
                    }
                </Text>

                <Text style={[textStyles.textSmall,  {color: colorText.body}]}  >
                    {
                        props.topicDescription ? props.topicDescription : "Topic description"
                    }
                </Text>
            </View>

            <CusButton
                title={isSaved ? saveButtonText.saved : saveButtonText.notSavedYet}
                onPress={save}
                type={isSaved ? "primary" : "outline"}
            />

        </View>
    )
}

export default TopicsCart

const styles = StyleSheet.create({
    imageTopics: {
        width: 70,
        height: 70,
        borderRadius: 6,
        backgroundColor: colorsDefault.lightGray,
    },

    buttonFollow: {
        minWidth: 78,
    }

})