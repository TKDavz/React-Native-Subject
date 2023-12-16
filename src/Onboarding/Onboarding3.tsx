import { View, Text } from 'react-native'
import React from 'react'
import Onboarding from './Onboarding'

const Onboarding3 = () => {
  return (
    <Onboarding
      title="Welcome to the app"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      numberOfScreens={3}
      indexScreen={2}
      image={require('../../../../assets/images/image3.png')}
      buttonTitle='Get Started'
    />

  )
}

export default Onboarding3