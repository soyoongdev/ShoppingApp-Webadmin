import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import {images, icons, COLORS, FONTS, SIZES} from '../../assets/constants';
import TagNameScreens from '../../contexts/TagNameScreens';


const SettingScreen = ({navigation}) => {
    const ScrollableTab = ({tabList, selectedTab, onPress}) => {

        const renderItem = ({item}) => (
          <TouchableOpacity
            style={{marginHorizontal: SIZES.padding}}
            onPress={() => onPress(item)}>
            <Text style={{color: COLORS.secondary, fontSize: FONTS.body2}}>{item.name}</Text>
      
            {selectedTab.id == item.id && (
              <View style={{alignItems: 'center', marginTop: SIZES.base}}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: COLORS.blue,
                  }}></View>
              </View>
            )}
          </TouchableOpacity>
        );
      
        return (
          <View style={{marginTop: SIZES.padding}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={tabList}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        );
      };
      
    
    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: 'Nike',
        title: 'Best of Air Max',
        productList: [
            {
                productId: 1,
                productName: 'Nike Air Max 95',
                price: 10.0,
                image: images.shoes.shoes1,
                color: COLORS.yellow,
                saleUpTo: '20%'
              },
              {
                productId: 2,
                productName: 'Nike Air Max Verona SE',
                price: 10.0,
                image: images.shoes.shoes2,
                color: COLORS.tim,
                saleUpTo: '35%'
              },
              {
                productId: 3,
                productName: 'Nike Air Max 79 SE',
                price: 10.0,
                image: images.shoes.shoes3,
                color: COLORS.blueLight2,
                saleUpTo: '10%'
              },
        ],
        
      });
    
    const ScrollableCard = ({navigation, productList}) => {
    
        const renderCard = ({item}) => (
          <TouchableOpacity
            style={{marginLeft: SIZES.padding}}
            onPress={() => navigation.navigate(TagNameScreens.DetailsItem, 
            {
              itemProductName: item.productName,
              itemPrice: item.price,
              itemImage: item.image,
              itemColor: item.color,
              itemSaleUp: item.saleUpTo
            })}>
            <View style={{width: SIZES.width / 1.2, height: SIZES.height / 3}}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{width: '100%', height: '100%', borderRadius: SIZES.radius * 2}}
              />
    
              <View
                style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
                <Text style={{color: COLORS.secondary, ...SIZES.h1}}>New</Text>
                <Text
                  style={{marginTop: SIZES.base, color: COLORS.black, ...FONTS.h2}}>
                  {item.productName}
                </Text>
              </View>
    
              <View
                style={{
                  position: 'absolute',
                  bottom: 15,
                  left: 10,
                  borderRadius: 15,
                  paddingHorizontal: 10,
                  backgroundColor: COLORS.transparentLightGray,
                  padding: 4,
                }}>
                <Text style={{...FONTS.h2, fontWeight: '300'}}>
                  $ {item.price.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
    
        return (
          <View
            style={{marginTop: SIZES.padding, flex: 1, flexDirection: 'column', }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={productList}
              renderItem={renderCard}
              keyExtractor={(item) => `${item.productId}`}
            />
          </View>
        );
      };
    return (
        <View style={styles.container}>
            <ScrollView>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                    />
            </ScrollView>
        </View>
      );
}



export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
