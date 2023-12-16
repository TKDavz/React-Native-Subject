import React, { useContext } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeStack from './Stacks/HomeStack';
import Bookmark from './Screens/Bookmark';
import ProfileStack from '../Users/Stacks/ProfileStack';
import Explore from './Screens/Explore';
import { IconBookmark, IconBookmarkFilled, IconCompass, IconCompassFilled, IconHome, IconHomeFilled, IconProfile, IconProfileFilled } from '../assets/icon_svg/svg';



function CustomTabBarIcon(route, { focused, color, size }) {
  let icon = <IconHome />
  switch (route.name) {
    case "Home":
      icon = focused ? <IconHomeFilled fill={color} /> : <IconHome fill={color} />;
      break;
    case 'Explore':
      icon = focused ? <IconCompassFilled fill={color} /> : <IconCompass fill={color} />;
      break;
    case 'Bookmark':
      icon = focused ? <IconBookmarkFilled fill={color} /> : <IconBookmark fill={color} />;
      break;
    case 'Profile':
      icon = focused ? <IconProfileFilled fill={color} /> : <IconProfile fill={color} />;
      break;
    default:
      break;
  }
  return icon;
}


const NewsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => CustomTabBarIcon(route, { focused, color, size }),
        // tabBarActiveTintColor: '#FF6C44',
        // tabBarInactiveTintColor: '#4E4B66',
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            display: 'flex',
            height: 60,
          },
          null,
        ],
      })}

    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Explore' component={Explore} />
      <Tab.Screen name='Bookmark' component={Bookmark} />
      <Tab.Screen name='Profile' component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default NewsNavigation