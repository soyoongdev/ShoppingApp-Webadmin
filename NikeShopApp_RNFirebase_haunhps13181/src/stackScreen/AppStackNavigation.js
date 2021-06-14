import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthStackScreens from './AuthStackNavigation';
import AuthStack from './AuthStack';
import BottomTabs from '../stackScreen/BottomTabNavigation';
import HomeScreen from '../screens/HomeScreen';
import Insert from '../contexts/Admin/Insert';
import OnboardingScreen from '../screens/OnboardingScreen';
import SettingScreen from '../screens/SettingScreen';

import TagName from '../contexts/TagNameScreens';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Update from '../contexts/Admin/Update';

// Details Screen
import ItemPressed from '../screens/Details/ItemPressed';

const AppStackScreens = () => {
    const AppStack = createStackNavigator();

    return (
        <>
            <AppStack.Navigator
                headerMode="none"
                initialRouteName={TagName.Main}>
                <AppStack.Screen name={TagName.Auth} component={AuthStackScreens} />
                <AppStack.Screen name={TagName.Main} component={BottomTabs} />
                <AppStack.Screen name={TagName.CURD} component={Insert} />
                <AppStack.Screen name={TagName.Update} component={Update} />
                <AppStack.Screen name={TagName.SettingScreen} component={SettingScreen} />
                <AppStack.Screen name={TagName.OnboardingScreen} component={OnboardingScreen} />
                <AppStack.Screen name={TagName.LoginScreen} component={LoginScreen} />
                <AppStack.Screen name={TagName.RegisterScreen} component={RegisterScreen} />
                <AppStack.Screen name={TagName.DetailsItem} component={ItemPressed} />

            </AppStack.Navigator>
        </>
    );
};

export default AppStackScreens;