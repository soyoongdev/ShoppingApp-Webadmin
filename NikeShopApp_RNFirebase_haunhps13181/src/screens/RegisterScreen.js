import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import TagName
import TagName from '../contexts/TagNameScreens';

// import firebase
import auth from '@react-native-firebase/auth';

import images from '../assets/images/index';

const {width, height} = Dimensions.get('window');

const RegisterScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const Register = (email, password) => {
    setShowLoading(true);
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          console.log(email, "   ", password);
          navigation.navigate(TagName.LoginScreen);

        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };

  return (
    <Animated.View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.loginTitle}>
        <Text style={styles.title}>Register</Text>
        <Image
          style={{
            maxWidth: 120,
            width: 120,
            height: 120,
          }}
          width={50}
          height={50}
          resizeMode="contain"
          source={images.logo.logo_notText}
        />
      </View>
      <View style={styles.inputContainer}>
        {/* <View style={styles.inputUsername}>
          <FontAwesome style={styles.icon} name="user" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Full name"
            onChangeText={(fullName) => setFullName(fullName)}
            value={fullName}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEmail('')}>
            <Fontisto name="close" size={18} color="grey" />
          </TouchableOpacity>
        </View> */}

        <View style={styles.inputUsername}>
          <MaterialCommunityIcons style={styles.icon} name="email" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#666666"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setEmail('')}>
            <Fontisto name="close" size={18} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputPassword}>
          <FontAwesome5 style={styles.icon} name="lock" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            autoCompleteType="password"
            placeholderTextColor="#666666"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={hidePass ? true : false}
          />
          <FontAwesome5
            style={{padding: 8}}
            name={hidePass ? 'eye-slash' : 'eye'}
            size={15}
            color="grey"
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.styleButton}>
          <TouchableOpacity
            onPress={() => Register(email, password)}
            style={styles.styleLogin}>
            <Text style={styles.titleLogin}>Register</Text>
            {showLoading && (
              <View
                style={{
                  position: 'absolute',
                }}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
          </TouchableOpacity>
          
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(TagName.LoginScreen)}>
            <Text style={{color: '#000'}}>
              Do you already have an account?{' '}
              <Text
                style={{color: '#ff2234', fontSize: 16, fontWeight: 'bold'}}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  logoContainer: {
    width: width,
    alignItems: 'center',
  },

  loginTitle: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
  forgotPass: {
    margin: 10,
  },
  textForgot: {
    fontSize: 14,
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputUsername: {
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  inputPassword: {
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  inputText: {
    flex: 1,
  },
  icon: {
    margin: 10,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  styleButton: {
    alignItems: 'center',
  },

  styleLogin: {
    width: width * 0.7,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  titleLogin: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#f3f8ff',
  },
  loginContainer: {
    bottom: 30,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
