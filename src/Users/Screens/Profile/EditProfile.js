import {
  StyleSheet, Text,
  TextInput, View, Image, TouchableHighlight, Dimensions, TouchableOpacity,
  KeyboardAvoidingView, ScrollView,
} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { updateInfomation } from '../../UserService';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Snackbar from 'react-native-snackbar';
import { UserContext } from '../../UserContext';
import ModalUploadImage from '../../../components/ModalUploadImage';
import ModalDatePicker from '../../../components/ModalDatePicker';
import CustomInput from '../../../components_tsx/Input/CustomInput';
import ToolBar from '../../../components_tsx/Button/ToolBar';

const EditProfile = (props) => {
  const { user: currentUser, setUser } = useContext(UserContext);
  const { navigation } = props;

  const [isShowModal, setIsShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveClicked, setIsSaveClicked] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (isSaveClicked) {
      (async function () {
        setIsLoading(true);
        const res = await updateInfomation({ avatar, name: fullName, email, phone: phoneNumber, address, dob: dateOfBirth });
        if (res?.statusCode === 200) {
          setUser(res.data);
          Snackbar.show({
            text: 'Cập nhật thông tin thành công!',
            duration: Snackbar.LENGTH_LONG
          });
          navigation.goBack();
        }
        setIsLoading(false);
        setIsSaveClicked(false);
      })()

    }
  }, [isSaveClicked])

  const handleSave = () => {
    setIsSaveClicked(true);
  }

  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [fullName, setFullName] = useState(currentUser.name ?? '');
  const [email, setEmail] = useState(currentUser.email ?? '');
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phone ?? '');
  const [address, setAddress] = useState(currentUser.address ?? '');
  const [dateOfBirth, setDateOfBirth] = useState(currentUser.dob ?? new Date().toISOString);

  const list = [
    {
      id: 1,
      title: "Username",
      impotant: false,
      type: "text",
      value: fullName,
      onChangeText: setFullName,
    }, {
      id: 2,
      title: "Full Name",
      impotant: false,
      type: "text",
      value: fullName,
      onChangeText: setFullName,

    }, {
      id: 3,
      title: "Email Address",
      impotant: true,
      type: "email",
      value: email,
      onChangeText: setEmail,
    }, {
      id: 4,
      title: "Phone Number",
      impotant: true,
      type: "tel",
      value: phoneNumber,
      onChangeText: setPhoneNumber,
    }, {
      id: 5,
      // title: "Bio",
      // impotant: false,
      // type: "text",
      // value: address,
      // onChangeText: setAddress,
      title: "Date of Birth",
      impotant: false,
      type: "date",
      value: dateOfBirth,
      onChangeText: setDateOfBirth,
    }, {
      id: 6,
      title: "Website",
      impotant: false,
      type: "url",
      value: address,
      onChangeText: setAddress,
    },

  ];
  return (
    <KeyboardAvoidingView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
        indicatorStyle={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%" }}
      />

      <ScrollView>
        <View style={styles.container}>

        <ToolBar
            type='edit'
            title='Edit Profile'
            onPressLeftIconButton={() => navigation.goBack()}
            onPressRightIconButton={ handleSave}
            style={{marginBottom: 10}}
          />

          <View style={styles.avatarContainer}>
            {
              !!avatar ? <Image style={styles.imgAvatar} source={{ uri: avatar }} /> :
                <Text style={styles.imgAvatar} />

            }

            <TouchableHighlight style={styles.iconEditAvatar} onPress={() => setIsShowModal(!isShowModal)}>
              <Image source={require('../../../assets/images/Frame.png')} />
            </TouchableHighlight>
          </View>
          <ModalUploadImage controlModal={[isShowModal, setIsShowModal]} onUploaded={setAvatar} />

          <View style={styles.vbody}>

            {

              list.map((item) => {
                return (
                  <View style={styles.vbodyItem}
                  key={item.id}
                  >

                    <CustomInput
                      title={item.title}
                      value={item.value}
                      onChangeText={item.onChangeText}
                      type={item.type ?? 'text'}
                      onPressIn={item.type === 'date' ? () => setShowDatePicker(true) : null}
                      important={item.impotant}
                      style={{ marginVertical: 6 }}
                    />
                    {
                      item.type === 'date' && (
                        <ModalDatePicker controlModal={[showDatePicker, setShowDatePicker]} onDateSelected={(d) => setDateOfBirth(d.toISOString())} />
                      )
                    }
                  </View>
                )
              })

            }
          </View>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 14,
    color: '#4E4B66',
    marginBottom: 4,
  },
  txtInput: {
    width: '100%',
    borderColor: '#4E4B66',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
    color: '#050505',
  },
  vbodyItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconEditAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    backgroundColor: '#C4C4C4',
    bottom: 0,
    right: Dimensions.get('window').width / 2 - 80,
  },
  imgAvatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#C4C4C4',
  },
  avatarContainer: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  txtHeader: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  vHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
})