import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { colorsDefault } from '../../../Root/RootValues'

import { IconCamera } from '../../../assets/icon_svg/svg'
import { imageStyles } from '../../../Styles/ImageStyles'

const ImageProfile = () => {
    return (
        <View>
            <View>
                <Image style={imageStyles.profileImage} source={require('../../../../assets/images/imagesSimple/author/Author1.png')} />
            </View>

            <TouchableOpacity>
                <IconCamera fill={colorsDefault.white}/>
            </TouchableOpacity>

        </View>
    )
}

export default ImageProfile

const styles = StyleSheet.create({})