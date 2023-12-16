import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from './Onboarding'

const Onboarding1 = () => {
  return (
    <Onboarding
      title="Lorem Ipsum is simply dummy"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      numberOfScreens={3}
      indexScreen={0}
      image={require('../../../../assets/images/image1.png')}
    />
  )
}

export default Onboarding1

const styles = StyleSheet.create({})