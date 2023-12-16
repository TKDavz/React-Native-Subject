import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

import { colorsDefault, textColor } from '../Root/RootValues';
import { ColorTextType } from '../Root/RootTypes';

import { textStyles } from '../Styles/TextStyle';
import { flextStyles } from '../Styles/FlexStyles';
import { IconImage, VectorDot } from '../assets/icon_svg/svg';

import CustomButton from '../components_tsx/Button/CustomButton';

type OnboardingProps = {
  isDarkmode?: boolean | undefined;

  numberOfScreens?: number | undefined;
  indexScreen?: number | undefined;

  image?: ImageSourcePropType | undefined;

  title?: string | undefined;
  description?: string | undefined;

  buttonTitle?: string | undefined;

  onPressNextButton?: () => void;
  onPressBackButton?: () => void;

}

const Onboarding = (props: OnboardingProps) => {
  const colorText: ColorTextType = props.isDarkmode ? textColor.darkmode : textColor.lightmode;

  const indexScreen = props.indexScreen ? props.indexScreen : 0;
  const numberOfScreens = props.numberOfScreens ? props.numberOfScreens : 1;


  return (
    <View style={{ flex: 1 }}>
      {
        props.image ? <Image style={{ width: "100%", flex: 2 }} 
        source={props.image} /> : <View style={[flextStyles.rowFlexBox,{ width: "100%", flex: 2 , backgroundColor: colorsDefault.lightGray}]} >
          <IconImage/>
        </View>
      }

      <View style={[flextStyles.columnFlexBox, flextStyles.justifyContentSpaceBetween, { padding: 20, paddingHorizontal: 24, flex: 1 }]}>
        <View style={[flextStyles.columnFlexBox, flextStyles.alignItemsFlexStart, { gap: 1 }]}>
          <Text style={[textStyles.displaySmall, textStyles.displayTextBold, { color: colorText.tilte }]}>
            {props.title}
          </Text>


          <Text style={[textStyles.textMedium, { color: colorText.body }]}>
            {props.description}
          </Text>
        </View>

        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentSpaceBetween, { width: "100%", marginBottom: 40 }]}>
          <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart, { flexWrap: "wrap", width: "30%", gap: 5 },]}>
            {
              Array.from(Array(numberOfScreens).keys()).map((item, index) => {
                let color = indexScreen === index ? colorsDefault.primaryColor : colorsDefault.grayscaleColor_Group.placeholder;

                return (
                  <VectorDot key={index} fill={color} />
                )
              })
            }
          </View>

          <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexEnd, { gap: 1 }]}>
            {
              indexScreen === 0 ?
                undefined :
                <CustomButton
                  title="Back"
                  type="secondary"
                  style={{ marginRight: -15 }}
                  onPress={() => props.onPressBackButton ? props.onPressBackButton() : undefined}
                />
            }

            <CustomButton
              title= { props.buttonTitle ? props.buttonTitle : "Next"}
              type="primary"
              onPress={() => props.onPressNextButton ? props.onPressNextButton() : undefined}
            />
          </View>

        </View>

      </View>


    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})