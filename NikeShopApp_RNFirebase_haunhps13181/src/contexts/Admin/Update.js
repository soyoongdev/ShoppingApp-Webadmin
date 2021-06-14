import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';

import {COLORS, FONTS, SIZES} from '../../assets/constants';

import TagName from '../TagNameScreens';

const Update = ({navigation,route}) => {
    const { Name, id, Price,image } = route.params;

  const [name, setName] = useState(Name);
  const [price, setPrice] = useState(Price);

  const dataShoesPushing = (id,names,prices)=>{
      

       database().ref('/Product/'+id).update({
        id:id,
        Name:names,
        Price:prices,
        image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77099cd4-eb45-4309-9001-4508a44fc634/wildhorse-7-trail-running-shoe-XdK82N.jpg'
    }).then(()=> navigation.navigate(TagName.HomeScreen)).catch((e)=>console.error(e));
  
  }

  const deleteData = (id) => {
    database().ref('/Product/'+id).remove().then(navigation.navigate(TagName.HomeScreen)).catch((e)=>console.error(e));
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
          Update Data
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
        <TouchableOpacity onPress={()=> dataShoesPushing(id,name,price)} style={styles.buttonContainer}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
            }}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => deleteData(id)}
          style={{alignItems: 'center', bottom: 30}}>
          <Text style={{color: 'red', fontSize: 18}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Update;

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
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'space-between',
    flexDirection: 'column',
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
