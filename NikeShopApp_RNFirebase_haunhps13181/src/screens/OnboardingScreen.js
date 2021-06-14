import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight, SafeAreaView, StatusBar, Image, TouchableOpacity, Animated
} from "react-native";
import Video from "react-native-video";
import images from "../assets/images/index";
import auth from '@react-native-firebase/auth';

import TagName from '../contexts/TagNameScreens';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

 function Onboarding () {

  
    const navigation = useNavigation();

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (user) {
      console.log(user.email)
     navigation.navigate(TagName.Main);
    }
    return(
    

      
      <Animated.View style={styles.container}>
        <StatusBar hidden={false} translucent backgroundColor='transparent' />
        <Video
          source={images.video.video}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}

        />

        <View style={styles.Wrapper}>
          <Image
            style={{ width: 150, height: 150 }}
            source={images.logo.logo_notText}
            width={80}
            height={80}
            resizeMode="contain"
          />
          <View style={styles.SloganContainer}>

            <View style={styles.slogan}>
              <Text style={styles.title}>NEW STYLES ON SALE</Text>
              <Text style={styles.TextDescription}>
                Shop new sale markdowns and save up to 40%. Quantities are limited. Shop Now
            </Text>
            </View>

            <View style={styles.styleButton}>
              <TouchableOpacity style={styles.styleCreate}
                onPress={() => navigation.navigate(TagName.RegisterScreen)}>
                <Text style={styles.titleCreate}>Create account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(TagName.LoginScreen)}
                style={styles.styleLogin}>
                <Text style={styles.titleLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </Animated.View>
      
    );
    }
    


export default Onboarding
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    flex: 1,
    height: height,
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
  Wrapper: {
    width: width,
    height: height,
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  SloganContainer: {
    alignItems: 'center',
    bottom: '0.5%'
  },
  title: {
    color: "#f4f4f4",
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 30,
    fontFamily: "OpenSans_Regular",
  },
  TextDescription: {
    color: "#f4f4f4",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  styleButton: {
    marginTop: '10%'
  },
  styleCreate: {
    width: 250,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleLogin: {
    width: 250,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  titleCreate: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#000000'
  },
  titleLogin: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#f3f8ff'
  }
});
