import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from '../Screens/Detail';
import Home from '../Screens/Home';



const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default HomeStack
