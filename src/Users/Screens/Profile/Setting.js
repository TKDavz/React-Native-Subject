import {
  StyleSheet, Text, View, Image,
  TouchableOpacity,
} from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../UserContext';
import arrowRight from '../../../assets/images/arrow_mini_icon.png'
import SettingCart from '../../../components_tsx/Detail/Module/SettingCart';
import ToolBar from '../../../components_tsx/Button/ToolBar';
import { IconLock, IconLogout, IconMoon, IconNotification, IconQuestion } from '../../../assets/icon_svg/svg';


const Setting = (props) => {
  //user context
  const { setUser } = useContext(UserContext);
  const { navigation } = props;
  const { isDarkMode } = props;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null);
  }

  const list = [
    {
      id: 1,
      title: "Account",
      icon: <IconNotification />,
      type: "more",
      onPress: () => { },
    }, {
      id: 2,
      title: "Security",
      icon: <IconLock />,
      type: "more",
      onPress: () => { },
    }, {
      id: 3,
      title: "Help",
      icon: <IconQuestion />,
      type: "more",
      onPress: () => { },
    }, {
      id: 4,
      title: "Dark Mode",
      icon: <IconMoon />,
      type: "switch",
      onPress: () => { },
    }, {
      id: 5,
      title: "Logout",
      icon: <IconLogout />,
      type: "button",
      onPress: () => { handleLogout() },
    }

  ]

  return (
    <View style={styles.container}>

      <ToolBar
        isDarkmode={isDarkMode}
        title="Settings"
        onPressLeftIconButton={() => navigation.goBack()}
      />

      {

        list.map((item) => (
          <SettingCart
            key={item.id}
            isDarkmode={isDarkMode}
            title={item.title}
            type={item.type}
            onPress={item.onPress}
            leftIcon={(color) => React.cloneElement(item.icon, { fill: color })}
            style={{ marginVertical: 15 }}
          />
        ))

      }


    </View>

  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
})