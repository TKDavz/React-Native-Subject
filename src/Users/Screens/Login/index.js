import { StyleSheet, Text, View, Pressable, Image, ScrollView, KeyboardAvoidingView, Alert, Button, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useEffect, useCallback } from 'react'

import { UserContext } from '../../UserContext';

import Spinner from 'react-native-loading-spinner-overlay';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { colorsDefault, textColor } from '../../../Root/RootValues';
import { IconFacebookFilled, IconGoogleFilled } from '../../../assets/icon_svg/svg';

import { flextStyles } from '../../../Styles/FlexStyles';
import { textStyles } from '../../../Styles/TextStyle';

import CustomInput from '../../../components_tsx/Input/CustomInput.tsx';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../../components_tsx/Button/CustomButton';


const Login = (props) => {
  const { navigation } = props;

  const { isDarkMode } = props;
  const colorText = isDarkMode ? textColor.darkmode : textColor.lightmode;

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('test.mail@gmail.com')
  const [password, setPassword] = useState('12345')
  const { onLogin } = useContext(UserContext);

  const [error, setError] = useState([false, false]);

  const [rememberMe, setRememberMe] = useState(false);

  const onLoginPress = async () => {
    if (email === '' || password === '' || error[0] || error[1]) {
      Alert.alert('Please fill in all fields correctly');
      return;
    }

    setIsLoading(true);
    const result = await onLogin(email, password);
    setIsLoading(false);
    if (!result) {
      Alert.alert('Login failed');
    }
  }
  useEffect(() => {
    GoogleSignin.configure();
  }, [])

  const signInWithGoogle = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log('google login userInfo:', userInfo)
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('SIGN_IN_CANCELLED')
          // sign in was cancelled
          break;
        case statusCodes.IN_PROGRESS:
          console.log('IN_PROGRESS')
          // operation (e.g. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('PLAY_SERVICES_NOT_AVAILABLE')
          // android only
          break;
        default:
          // some other error happened
          console.error('signInGoogle', error);
      }
    }
  })


  return (
    <KeyboardAvoidingView style={styles.body}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
        indicatorStyle={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
      />
      <ScrollView>
        <View style={[flextStyles.columnFlexBox]}>
          <View style={[styles.group, { marginBottom: 40 }]}>
            <View>
              <Text style={[textStyles.displayLarge, textStyles.displayTextBold, { color: colorText.tilte }]}>Hello</Text>
              <Text style={[textStyles.displayLarge, textStyles.displayTextBold, { color: colorsDefault.primaryColor }]}>Again!</Text>
            </View>

            <Text style={[textStyles.textLarge, { color: colorText.body, width: 222, }]} >Welcome back you've
              been missed</Text>
          </View>

          <View>
            <CustomInput
              title="Email"
              type='email'
              placeholder=''

              showClearButton={false}
              value={email}
              onChangeText={setEmail}
              important={true}
              style={{ marginBottom: 10 }}
              regex={/^[a-zA-Z0-9\.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/}
              onValueIsInvalidChange={(value) => setError([value, error[1]])}

            />

            <CustomInput
              title="Password"
              type='password'
              placeholder=''

              showClearButton={false}
              value={password}
              onChangeText={setPassword}
              important={true}
              style={{ marginBottom: 10 }}
              onValueIsInvalidChange={(value) => setError([error[0], value])}
            />

          </View>


          <View style={[styles.groupViewBtn, styles.marginVerti, { marginTop: -5 }]}>
            <View style={[styles.remem]}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                tintColors={{ true: colorsDefault.primaryColor, false: colorText.body }} />
              <Text onPress={() => setRememberMe(!rememberMe)}
                style={[textStyles.textSmall, { color: colorText.body }]}
              >Remember me</Text>
            </View>

            <View>
              <Text style={[textStyles.textSmall, { color: colorsDefault.primaryColor }]} >Forgot the password ?</Text>
            </View>
          </View>


          <CustomButton
            title="Login"
            type="primary"
            onPress={onLoginPress}
            style={{ marginBottom: 10, width: "100%" }}
          />

          <Text style={[textStyles.textSmall, { color: colorText.body }]} >or continue with</Text>

          <View style={[styles.groupViewBtn, styles.marginVerti]} >
            <TouchableOpacity style={styles.viewBtn} activeOpacity={0.5}

            >

              <IconFacebookFilled />
              <Text>Facebook</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBtn} activeOpacity={0.5}
              onPress={signInWithGoogle}
            >

              <IconGoogleFilled />
              <Text>Google</Text>

            </TouchableOpacity>
          </View>

          <View style={[styles.group, flextStyles.rowFlexBox]}>
            <Text style={[textStyles.textSmall, { color: colorText.body }]} >don't have an account ?</Text>
            <Text style={{ color: colorsDefault.primaryColor, fontWeight: "700" }}
              onPress={() => navigation.navigate("Register")}>Sign Up</Text>
          </View>

        </View >

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

  marginVerti: {
    marginVertical: 8,
  },

  group: {
    display: 'flex',
    width: '100%',
    marginVertical: 8,
  },

  remem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "auto",
    marginStart: -5,
  },

  viewBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingEnd: 24,
    paddingStart: 16,
    paddingTop: 12,

    gap: 10,
    width: 174,
    height: 48,

    backgroundColor: "#EEF1F4",
    borderRadius: 6,

    marginHorizontal: 5,
    flexGrow: 0,
  },

  groupViewBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },
  body: {
    padding: 24,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  }

});