import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TagName from '../contexts/TagNameScreens';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default AuthStackScreens = () => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator

            initialRouteName={TagName.OnboardingScreen}
            headerMode="none">
            <AuthStack.Screen name={TagName.OnboardingScreen} component={OnboardingScreen} />
            <AuthStack.Screen name={TagName.LoginScreen} component={LoginScreen} />
            <AuthStack.Screen name={TagName.RegisterScreen} component={RegisterScreen} />
        </AuthStack.Navigator>
    )
}

