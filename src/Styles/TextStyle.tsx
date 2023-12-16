import { StyleSheet } from "react-native";
import { colorsDefault  } from "../Root/RootValues";

export const textStylesPropsValue = {
    fontFamily: "'Poppins'",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textFontWeight: "400",
    textLinkFontWeight: "600",
    displayTextFontWeight: "400",
    displayTextBoldFontWeight: "700"
    //lineHeight: 24, 21, 22, 20
};

export const textStyles = StyleSheet.create({

    blackColorText: {
        color: colorsDefault.black,
    },

    whiteColorText: {
        color: colorsDefault.white,
    },

    bodyText: {
        color: colorsDefault.grayscaleColor_Group.bodyText,
    },

    lightGrayColorText: {
        color: colorsDefault.lightGray,
    },

    primaryColorDefaultText: {
        color: colorsDefault.primaryColor,
    },

    placeholderText: {
        color: colorsDefault.grayscaleColor_Group.placeholder,
    },

    invalidText: {
        color: colorsDefault.error_Group.dark,
    },

    textXSmall: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.textFontWeight as any,
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    textSmall: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.textFontWeight as any,
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    textMedium: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.textFontWeight as any,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    textLarge: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.textFontWeight as any,
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    link: {
        fontWeight: textStylesPropsValue.textLinkFontWeight as any,
    },

    displaySmall: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.displayTextFontWeight as any,
        fontSize: 24,
        lineHeight: 36,
    
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    displayMedium: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.displayTextFontWeight as any,

        fontSize: 32,
        lineHeight: 48,
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    displayLarge: {
        fontFamily: textStylesPropsValue.fontFamily,
        fontStyle: "normal",
        fontWeight: textStylesPropsValue.displayTextFontWeight as any,
        
        fontSize: 48,
        lineHeight: 72,
    
        letterSpacing: textStylesPropsValue.letterSpacing,
    },

    displayTextBold: {
        fontWeight: textStylesPropsValue.displayTextBoldFontWeight as any,
    }


    

});