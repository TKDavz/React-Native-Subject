import { View, Text } from 'react-native'
import React from 'react'
import Onboarding from './Onboarding'

const Onboarding2 = () => {
  return (
    <Onboarding
      title="Lorem Ipsum is simply dummy"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      numberOfScreens={3}
      indexScreen={1}
      image={require('../../../../assets/images/image2.png')}
    />
  )
}

export default Onboarding2