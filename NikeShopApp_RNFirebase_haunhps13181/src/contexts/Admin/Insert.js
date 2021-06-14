import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';

import {COLORS, FONTS, SIZES} from '../../assets/constants';

import TagName from '../TagNameScreens';

const AddFirebase = ({navigation}) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const dataShoesPushing = (id, names, prices)=>{
      let key;

   if(id == null){
       key=database().ref().push().key;
       database().ref('/Product/'+key).update({
        id:key,
        Name:names,
        Price:prices,
        image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77099cd4-eb45-4309-9001-4508a44fc634/wildhorse-7-trail-running-shoe-XdK82N.jpg'
    }).then(()=> navigation.navigate(TagName.HomeScreen)).catch((e)=>console.error(e))

   }
   console.log(key);
  
  }
  
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 32,
          }}>
          Insert Data
        </Text>
      </View>
      <View style={styles.addContainer}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: SIZES.h2,
            marginTop: 20,
          }}>
          Name
        </Text>
        <TextInput
          style={styles.AddNameContainer}
          placeholder="Name"
          onChangeText={(name) => setName(name)}
          value={name}
        />
      </View>
      <View style={styles.addContainer}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: SIZES.h2,
            marginTop: 20,
          }}>
          Price
        </Text>
        <TextInput
          style={styles.AddNameContainer}
          placeholder="Price"
          onChangeText={(price) => setPrice(price)}
          value={price}
        />
      </View>
      <View style={styles.Button}>
        <TouchableOpacity onPress={()=> dataShoesPushing(null,name,price)} style={styles.buttonContainer}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFirebase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
  },

  AddNameContainer: {
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  inputText: {
    flex: 1,
  },
  Button: {
    marginLeft: 50,
    marginRight: 50,
  },
  buttonContainer: {
    backgroundColor: COLORS.black,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
