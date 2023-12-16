import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { flextStyles } from '../Styles/FlexStyles'
import { VectorAppLogo } from '../assets/icon_svg/svg'
const FistScreen = () => {
    return (
        <View style={[flextStyles.rowFlexBox, { width: "100%", height: "100%" }]}>
            <VectorAppLogo width={217} height={66} style={{bottom: 90}}/>
        </View>
    )
}

export default FistScreen

const styles = StyleSheet.create({})