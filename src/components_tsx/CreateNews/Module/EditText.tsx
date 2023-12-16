import { StyleSheet, Text, View, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

import { IconAlignCenter, IconAlignLeft, IconBold, IconImage, IconItalic, IconLink, IconListOrdered, IconListUnordered, IconMoreHorizontal, InconFontSize } from '../../../assets/icon_svg/svg'
import CustomButton from '../../Button/CustomButton'
import { flextStyles } from '../../../Styles/FlexStyles'

type EditTextProps = {
  style?: ViewStyle | ViewStyle[] | undefined,
  disabledButton?: boolean | undefined,
  onButtonPress?: () => void,
}

const EditText = (props: EditTextProps) => {
  return (

    <View style={[{ width: "100%" }, props.style]}>
      <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart, { gap: 14 }, { marginLeft: 30 }]}>
        <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
          <IconBold />
        </TouchableOpacity>

        <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
          <IconItalic />
        </TouchableOpacity>

        <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
          <IconListOrdered />
        </TouchableOpacity>

        <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
          <IconListUnordered />
        </TouchableOpacity>

        <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
          <IconLink />
        </TouchableOpacity>

      </View>

      <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { paddingVertical: 20 }]}>
        <View style={[flextStyles.rowFlexBox, { gap: 18 }]}>

          <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
            <InconFontSize />
          </TouchableOpacity>

          <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
            <IconAlignLeft />
          </TouchableOpacity>

          <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
            <IconAlignCenter />
          </TouchableOpacity>

          <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
            <IconImage />
          </TouchableOpacity>

          <TouchableOpacity style={[flextStyles.rowFlexBox, styles.iconButton]}>
            <IconMoreHorizontal />
          </TouchableOpacity>

        </View>

        <CustomButton
          title="Publish"
          type={props.disabledButton ? "secondary" : "primary"}
          disabled={props.disabledButton}
          onPress={props.onButtonPress}
          style={[{}]}
        />
      </View>
    </View>
  )
}

export default EditText

const styles = StyleSheet.create({
  iconButton: {
    width: 24,
    height: 24,
  }
})