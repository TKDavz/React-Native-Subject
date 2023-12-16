import { StyleSheet, Text, View, TouchableOpacity, Image, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

import { IconPlus, IconDown } from '../../assets/icon_svg/svg'

import { textStyles } from '../../Styles/TextStyle'
import { buttonStyles } from '../../Styles/ButtonStyles'
import { colorsDefault } from '../../Root/RootValues'
import { flextStyles } from '../../Styles/FlexStyles'

export type CustomButtonProps = {
  title: string,
  type?: "primary" | "secondary" | "outline" | undefined,
  typeIcon?: "none" | "left" | "right" | "both" | undefined,

  disabled?: boolean | undefined,
  onPress?: () => void | undefined,
  style?: ViewStyle | ViewStyle[] | undefined,
  labelStyle?: TextStyle | TextStyle[] | undefined,
  firstIcon ? : (color: string) => React.ReactNode | undefined,
  secondIcon ? : (color: string) => React.ReactNode | undefined,
}

const CustomButton = (props: CustomButtonProps) => {

  const typeIcon = props.typeIcon ? props.typeIcon : "none";
  const type = props.type ? props.type : "primary";

  const style = type === "primary" ? {
    styleButton: buttonStyles.buttonPrimary,
    colorLabel: colorsDefault.white,
  }
    : type === "secondary" ? {
      styleButton: buttonStyles.buttonSecondary,
      colorLabel: colorsDefault.grayscaleColor_Group.buttonText,
    }
      : type === "outline" ? {
        styleButton: buttonStyles.buttonOutline,
        colorLabel: colorsDefault.primaryColor,
      }
        : {
          styleButton: buttonStyles.buttonPrimary,
          colorLabel: colorsDefault.white,
        };

  const firstIcon = typeIcon === "left" || typeIcon === "right" || typeIcon === "both" ? props.firstIcon ? props.firstIcon(style.colorLabel) : <IconPlus color={style.colorLabel} /> : null;
  const secondIcon = typeIcon === "both" ? props.secondIcon ? props.secondIcon(style.colorLabel) : <IconDown fill={style.colorLabel} /> : null;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={props.disabled}
      style={[style.styleButton, props.style, flextStyles.rowFlexBox, typeIcon === "right" && flextStyles.rowFlexBoxReverse]}
      onPress={props.onPress}
    >
      {
        firstIcon
      }

      <Text 
      style={[textStyles.textMedium, {color: style.colorLabel}, textStyles.textMedium, textStyles.link, props.labelStyle]}
      > {props.title ? props.title : "Button Label" } </Text>

      {
        secondIcon
      }

    </TouchableOpacity>
  )
}

export default CustomButton
