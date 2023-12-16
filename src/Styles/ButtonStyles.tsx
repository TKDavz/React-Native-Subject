import { StyleSheet } from "react-native";

import { colorsDefault } from "../Root/RootValues";

const backgroundPrimaryColor = colorsDefault.primaryColor;
const backgroundSecondaryColor = colorsDefault.grayscaleColor_Group.button;
const backgroundOutlineColor = "transparent";

export const buttonStyles = StyleSheet.create({
    iconButton: {
        width: 32,
        height: 32,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 6,
    },

    buttonPrimary: {
        backgroundColor: backgroundPrimaryColor,

        borderRadius: 6,

        paddingHorizontal: 24,
        paddingVertical: 12,
    },

    buttonSecondary: {
        backgroundColor: backgroundSecondaryColor,
        borderRadius: 6,

        // paddingVertical: 10,
        // paddingHorizontal: 16,

        paddingHorizontal: 24,
        paddingVertical: 12,
    },

    buttonOutline: {
        backgroundColor: backgroundOutlineColor,

        borderRadius: 6,
        borderWidth: 1,
        borderColor: backgroundPrimaryColor,

        // minWidth: 95,
        // paddingHorizontal: 10,
        // paddingVertical: 4,

        paddingHorizontal: 24,
        paddingVertical: 12,
    },

});