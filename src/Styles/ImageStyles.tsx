import { StyleSheet } from 'react-native';

import { colorsDefault } from '../Root/RootValues';

const backgroundColorFalse = colorsDefault.grayscaleColor_Group.backgroudImage;
const backgroundColorTrue = colorsDefault.lightGray;

export const imageStyles = StyleSheet.create({
    imageTrue: {
        backgroundColor: backgroundColorTrue,
    },

    newsAuthorLogo: {
        width: 20,
        height: 20,

        borderRadius: 18,
    },

    nationalFlag: {
        maxWidth: 32,
        height: 22,
        borderRadius: 4,
        backgroundColor: backgroundColorFalse,
    },

    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 80,
        backgroundColor: backgroundColorFalse,
    },

    newsImageVertical: {
        width: 364,
        height: 183,
        borderRadius: 6,
        backgroundColor: backgroundColorFalse,
    },

    newsImageHorizontal: {
        height: 96,
        width: 96,
        backgroundColor: backgroundColorFalse,
        borderRadius: 6
    },

    topicImage: {
        width: 256,
        height: 256,
        borderRadius: 6,
        backgroundColor: backgroundColorFalse,
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: backgroundColorFalse,
    },

    newsAuthorImage1: {
        width: 24,
        height: 24,
        borderRadius: 18,
        backgroundColor: backgroundColorFalse,
    },

    newAuthorImage2: {
        width: 20,
        height: 20,
        borderRadius: 18,
        backgroundColor: backgroundColorFalse,
    },
    
    cameraChangeImageProfile: {
        width: 30,
        height: 30,
        borderRadius: 18,
        backgroundColor: backgroundColorFalse,
    },

});