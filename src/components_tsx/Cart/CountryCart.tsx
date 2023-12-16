import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'

import { colorsDefault, textColor } from '../../Root/RootValues'

import { CountryCartProps } from './CartTypeProps'
import { IconImage } from '../../assets/icon_svg/svg'

import { flextStyles } from '../../Styles/FlexStyles'
import { textStyles } from '../../Styles/TextStyle'


const CountryCart = (props: CountryCartProps) => {
    // tạo useState để lưu trạng thái selected
    const [isSelected, setIsSelected] = useState(props.isSelected);

    // tạo hàm select để thay đổi trạng thái select
    const select = () => {
        setIsSelected(!isSelected);
    }

    const isDarkmode = props.isDarkmode || false;
    const countryName = props.countryName || "Country name";

    const colorText = isDarkmode ? textColor.darkmode : textColor.lightmode;

    return (
        <View style={[flextStyles.rowFlexBox, flextStyles.justifyContentFlexStart, styles.boxCountry,
        isSelected && { backgroundColor: colorsDefault.primaryColor }
        ]}>
            <View style={[flextStyles.rowFlexBox, { width: 32, height: 22, padding: 5 }]}>

                {

                    props.nationalFlag === undefined ? <IconImage width={32} height={22} fill={colorText.body}  style={{borderRadius : 4}}/>
                        : typeof props.nationalFlag === "object" ? <Image style={styles.nationalFlag} source={props.nationalFlag as ImageSourcePropType} />
                            : props.nationalFlag


                }

            </View>
            <Text style={[textStyles.textMedium, {color: colorText.body } , isSelected && { color: colorsDefault.white }]}>{countryName}</Text>
        </View>
    )
}

export default CountryCart

const styles = StyleSheet.create({
    nationalFlag: {
        maxWidth: 32,
        height: 22,
        borderRadius: 4,
    },

    boxCountry: {
        borderRadius: 6,
        backgroundColor: "transparent",
        marginVertical: 11,
        padding: 10,
        gap: 10
    }
})