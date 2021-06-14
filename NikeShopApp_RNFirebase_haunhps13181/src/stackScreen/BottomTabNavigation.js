import React,{useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StyleSheet, Text, View,DevSettings, Image} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';

// import colors from theme
import * as theme from '../assets/constants/theme';
import * as images_ from '../assets/constants/images';
import TagName from '../contexts/TagNameScreens';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const MyTabs=() =>{
  return (
    <>
      <StatusBar
        hidden={false}
        translucent={false}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Tab.Navigator
        initialRouteName={TagName.HomeScreen}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: theme.colors.light.foreground,
          inactiveTintColor: theme.colors.silver,
        }}>

        <Tab.Screen
          name={TagName.HomeScreen}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={30} />
              // <Image source={images_.default.shoesIcon} style={{width: 42, height: 42}} />
            ),
          }}
        />

        <Tab.Screen
          name={TagName.SearchScreen}
          component={SearchScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <FontAwesome name="search" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name={TagName.SettingScreen}
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="user-alt" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const App = () => {
  return <MyTabs />;
};

export default App;
