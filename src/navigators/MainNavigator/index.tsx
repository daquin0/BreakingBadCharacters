import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import CharacterScreen from '../../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const Component = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash" screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
            <Stack.Screen name="CharacterProfile" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Component