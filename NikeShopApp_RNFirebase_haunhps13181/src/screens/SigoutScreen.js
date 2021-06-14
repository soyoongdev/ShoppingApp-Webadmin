import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../assets/constants';

import auth from '@react-native-firebase/auth';
import TagNameScreens from '../contexts/TagNameScreens';

const Setting = ({navigation}) => {
  const LogOut = () => {
      try {
        auth()
        .signOut()
        .then(() => { console.log('User signed out!'),
        navigation.navigate(TagNameScreens.OnboardingScreen)}
        
        )
      } catch (error) {
        console.log(error);
      }

  };

  return (
    <View style={styles.container}>
   
      <TouchableOpacity
        onPress={() => LogOut()}
        style={{
          backgroundColor: COLORS.black,
          padding: 20,
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Setting;
