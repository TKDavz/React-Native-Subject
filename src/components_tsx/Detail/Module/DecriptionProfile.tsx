import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

import { textColor } from '../../../Root/RootValues'
import { ColorTextType } from '../../../Root/RootTypes'

import CustomButton from '../../Button/CustomButton'
import { flextStyles } from '../../../Styles/FlexStyles'
import { textStyles } from '../../../Styles/TextStyle'

type DecriptionProfileProps = {
  isDarkmode?: boolean | undefined,
  style?: ViewStyle | ViewStyle[] | undefined,

  name?: string | undefined,
  description?: string | undefined,

  leftButtonTitle?: string | undefined,
  rightButtonTitle?: string | undefined,

  onLeftButtonPress?: () => void,
  onRightButtonPress?: () => void,
}


const DecriptionProfile = (props: DecriptionProfileProps) => {
  const { isDarkmode, name, description, onLeftButtonPress, onRightButtonPress, leftButtonTitle, rightButtonTitle } = props;

  const colorText: ColorTextType = isDarkmode ? textColor.darkmode : textColor.lightmode;

  return (
    <View>
      <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { gap: 2 }, props.style]}>
        <Text style={[textStyles.textMedium, textStyles.link, { color: colorText.tilte }]}>
          {
            props.name ?? "Name"
          }
        </Text>
        <Text style={[textStyles.textMedium, { color: colorText.body }]}>

          {
            props.description ?? 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        </Text>
      </View>

      <View style={[flextStyles.rowFlexBox, { marginTop: 16 }]}>
        <CustomButton
          style={{ flex: 1 }}
          title={leftButtonTitle || "Edit profile"}
          onPress={() => onLeftButtonPress && onLeftButtonPress()}
        />

        <CustomButton
          style={{ flex: 1 }}
          title={rightButtonTitle || "Website"}
          onPress={() => onRightButtonPress && onRightButtonPress()}
        />
      </View>



    </View>
  )
}

export default DecriptionProfile

const styles = StyleSheet.create({})