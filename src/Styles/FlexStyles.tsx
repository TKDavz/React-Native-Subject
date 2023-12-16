import { StyleSheet } from 'react-native'

export const flextStyles = StyleSheet.create({
    rowFlexBox: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },

    rowFlexBoxReverse: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "center",
        gap: 10,
    },

    columnFlexBox: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
    },

    columnFlexBoxReverse: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column-reverse",
        justifyContent: "center",
        gap: 10,
    },

    justifyContentSpaceBetween: {
        justifyContent: "space-between",
    },

    justifyContentSpaceAround: {
        justifyContent: "space-around",
    },

    justifyContentCenter: {
        justifyContent: "center",
    },

    justifyContentFlexStart: {
        justifyContent: "flex-start",
    },

    justifyContentFlexEnd: {
        justifyContent: "flex-end",
    },

    alignItemsCenter: {
        alignItems: "center",
    },

    alignItemsFlexStart: {
        alignItems: "flex-start",
    },

    alignItemsFlexEnd: {
        alignItems: "flex-end",
    },

    alignItemsStretch: {
        alignItems: "stretch",
    },

    alignItemsBaseline: {
        alignItems: "baseline",
    },

})