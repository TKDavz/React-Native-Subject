import React, { useContext } from 'react'
import UserNavigation from '../Users/UserNavigation'
import NewsNavigation from '../News/NewsNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../Users/UserContext';

const AppNavigation = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation