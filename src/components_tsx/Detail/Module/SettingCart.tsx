import { StyleSheet, Text, View, TouchableOpacity, ViewStyle, Switch } from 'react-native'
import React from 'react'

import { colorsDefault, textColor } from '../../../Root/RootValues'
import { ColorTextType } from '../../../Root/RootTypes'

import { IconNotification, IconRight } from '../../../assets/icon_svg/svg'

import { flextStyles } from '../../../Styles/FlexStyles'
import { textStyles } from '../../../Styles/TextStyle'

export type TypeSettingCart = "button" | "switch" | "more" | undefined;

type SettingCartProps = {
    isDarkmode?: boolean | undefined;

    type?: TypeSettingCart;
    style?: ViewStyle | ViewStyle[] | undefined;
    title?: string | undefined;
    leftIcon?: (color: string) => React.ReactNode | undefined;

    onPress?: () => void;
    onSwitch?: (value: boolean) => void;
    onPressMore?: () => void;
    switchValue?: boolean | undefined;
}


const SettingCart = (props: SettingCartProps) => {

    const type = props.type || "button";
    const colorText: ColorTextType = props.isDarkmode ? textColor.darkmode : textColor.lightmode;

    const disabled = type !== "button" ? true : false;

    const showButtonMore = type === "more" ? true : false;

    const showSwitch = type === "switch" ? true : false;


    return (
        <TouchableOpacity style={[flextStyles.rowFlexBox, props.style]}
            disabled={disabled}
            onPress={props.onPress}>

            {
                props.leftIcon ? props.leftIcon(colorText.body) : undefined
            }

            <Text style={[textStyles.textMedium, { flex: 1, marginHorizontal: 2, color: colorText.tilte }]}>{props.title || "None Title"}</Text>

            {

                showButtonMore &&

                <TouchableOpacity style={[flextStyles.rowFlexBox, styles.button]}
                    onPress={props.onPressMore}>
                    <IconRight fill={colorText.body} />
                </TouchableOpacity>

            }


            {
                showSwitch &&

                <Switch
                    trackColor={{ false: colorsDefault.grayscaleColor_Group.disableInput, true: colorsDefault.primaryColor }}
                    thumbColor={colorsDefault.white}
                    ios_backgroundColor={colorsDefault.grayscaleColor_Group.disableInput}
                    onValueChange={props.onSwitch}
                    value={props.switchValue}
                />
            }

        </TouchableOpacity>
    )
}

export default SettingCart

const styles = StyleSheet.create({
    container: {
    },

    button: {
        width: 22,
        height: 22,
        borderRadius: 4,
    }
})