import {
  StyleSheet, Text, View,
  TextInput, Pressable, Image, TouchableHighlight, Alert,
  ScrollView, KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'

import React, { useState, useContext } from 'react'

import { UserContext } from '../../UserContext';

import Spinner from 'react-native-loading-spinner-overlay';

import { colorsDefault, textColor } from '../../../Root/RootValues';

import { textStyles } from '../../../Styles/TextStyle';
import { flextStyles } from '../../../Styles/FlexStyles';

import CustomButton from '../../../components_tsx/Button/CustomButton';
import CustomInput from '../../../components_tsx/Input/CustomInput';
import { IconFacebookFilled, IconGoogleFilled } from '../../../assets/icon_svg/svg';


const Register = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { onRegister } = useContext(UserContext);

  const { navigation } = props;
  const { isDarkMode } = props;

  const colorText = isDarkMode ? textColor.darkmode : textColor.lightmode;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [checkText, setCheckText] = useState('');

  const [error, setError] = useState([false, false, false]);


  const clearAll = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError([false, false, false]);
  }

  const onRegisterPress = async () => {
    if (password != confirmPassword) {
      Alert.alert('nhap lai khong khop!');
      return;
    }

    if (email === '' || password === '' || error[0] || error[1] || error[3]) {
      Alert.alert('khong de trong, hoac nhap sai');
      return;
    }

    setIsLoading(true);
    //goi API
    const result = await onRegister(email, password);
    setIsLoading(false);
    //neu thanh cong thi chuyen ve man hinh login
    if (!result) {
      Alert.alert('Account already exists');

      clearAll();
    } else {
      navigation.navigate('Login');
    }
  }

  const onChangeEmail = (value) => {
    // const regex = /^[a-z]{3,}ps[0-9]{5}@fpt.edu.vn$/;
    const regex = /^[a-z]{3,}[0-9]{1,}@gmail.com$/;
    if (regex.test(value)) {
      setEmail(value);
      setCheckText('');
    } else {
      setCheckText('Text error');
    }
    //hien dong text bao loi
  }

  return (
    <KeyboardAvoidingView style={styles.body}>

      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
        indicatorStyle={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
      />
      <ScrollView>

        <View style={[flextStyles.columnFlexBox,]}>
          <View style={[styles.group, { marginBottom: 40 }]}>
            <View>
              <Text style={[textStyles.displayLarge, textStyles.displayTextBold, { color: colorsDefault.primaryColor }]}>Hello!</Text>
            </View>

            <Text style={[textStyles.textLarge, { color: colorText.body, width: 222, }]} >Signup to get Started</Text>
          </View>

          <View>
            <CustomInput
              title="Email"
              type='email'
              showClearButton={false}
              placeholder=''
              value={email}
              onChangeText={setEmail}
              important={true}
              style={{ marginBottom: 10 }}
              // tao regex cho eamil test.email@gmail.com
              regex={/^[a-zA-Z0-9\.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/}

              onValueIsInvalidChange={(value) => {
                setError([value, error[1], error[2]]);
              }
              }
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
              onValueIsInvalidChange={(value) => {
                setError([error[0], value, error[2]]);
              }
              }
            />

            <CustomInput
              title="Confirm Password"
              type='password'
              placeholder=''
              showClearButton={false}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              important={true}
              style={{ marginBottom: 10 }}
              onValueIsInvalidChange={(value) => {
                setError([error[0], error[1], value]);
              }
              }
            />

          </View>


          <View style={[styles.groupViewBtn, styles.marginVerti, { marginTop: -5 }]}>


          </View>


          <CustomButton
            title="Sign up"
            type="primary"
            onPress={() => { onRegisterPress() }}
            style={{ marginBottom: 10, width: "100%" }}
          />

          <Text style={[textStyles.textSmall, { color: colorText.body }]} >or continue with</Text>

          <View style={[styles.groupViewBtn, styles.marginVerti]} >
            <TouchableOpacity style={styles.viewBtn} activeOpacity={0.5}>

              <IconFacebookFilled />
              <Text>Facebook</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBtn} activeOpacity={0.5}>

              <IconGoogleFilled />
              <Text>Google</Text>

            </TouchableOpacity>
          </View>


          <View style={[styles.group, flextStyles.rowFlexBox]}>
            <Text style={[textStyles.textSmall, { color: colorText.body }]} >Already have an account ?</Text>
            <Text style={{ color: colorsDefault.primaryColor, fontWeight: "700" }}
              onPress={() => navigation.navigate('Login')}
            >Login
            </Text>
          </View>

        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default Register

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
})