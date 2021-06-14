import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {images, icons, COLORS, FONTS, SIZES} from '../assets/constants';
import TagNameScreens from '../contexts/TagNameScreens';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: COLORS.secondary, ...FONTS.body2}}>{item.name}</Text>

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

const Notification = ({navigation}) => {
  const hostUrl = 'http://10.0.2.2:3003/products/products-send';
  const [data, setData] = useState([]);

      useEffect(() => {
        fetch(hostUrl)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => console.log("Error get data >>>>",error))
    }, []);

  console.log(data);

  const [tabList, setTabList] = React.useState([
    {
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
    },
    {
      id: 1,
      name: 'Adidas',
      title: 'cupboards',
      productList: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 2,
      name: 'Puma',
      title: 'tables',
      productList: [
        {
          productId: 7,
          productName: 'Product 7',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 8,
          productName: 'Product 8',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 9,
          productName: 'Product 9',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 3,
      name: 'Hummel',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
    {
      id: 4,
      name: 'Skecher',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 10.0,
          image: images.redChair,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 10.0,
          image: images.redChair,
        },
      ],
    },
  ]);

  
  const [selectedTab, setSelectedTab] = React.useState({
    id: 0,
    name: 'Nike',
    title: 'Best of Nike Air Max',
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

  // Render

  const ScrollableCard = ({navigation, productList}) => {

    const renderCard = ({item}) => (
      <TouchableOpacity
        style={{marginLeft: SIZES.padding}}
        onPress={() => navigation.navigate(TagNameScreens.DetailsItem, 
        {
          itemProductName: item.productName,
          itemPrice: item.price,
          itemImage: item.imgProduct,
          itemColor: item.color,
          itemSaleUp: item.saleUpTo
        })}>
        <View style={{width: SIZES.width / 1.2, height: SIZES.height / 3}}>
          <Image
            source={{uri:'http://10.0.2.2:3003/images/'+item.imgProduct}}
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

    const renderCardSale = ({item}) => (
      <TouchableOpacity
        style={{marginLeft: SIZES.padding, marginRight: 20}}
        onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
        <View style={{width: SIZES.width / 2, height: SIZES.height / 3}}>
          <Image
            source={{uri:'http://10.0.2.2:3003/images/'+item.imgProduct}}
            resizeMode="cover"
            style={{
              borderRadius: SIZES.radius * 2,
              maxWidth: 200,
              maxHeight: 200,
              width: '100%',
              height: '100%'
            }}
          />

          <View
            style={[styles.saleDealContainer,{backgroundColor: item.color}]}>
            <Text style={{fontFamily: FONTS.body3.fontFamily, color: COLORS.white}}>{item.saleUpTo}</Text>
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
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => `${item.productId}`}
        />
        <View style={{marginTop: SIZES.body2, marginBottom: SIZES.body2}}>
        <Text style={{fontSize: 18, marginLeft: SIZES.body1, marginBottom: SIZES.body2}}>Sales</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderCardSale}
            keyExtractor={(item) => `${item.productId}`}
          />
        </View>
      </View>
    );
  };

  function renderHeader() {
    return (
      <View style={{paddingHorizontal: SIZES.padding, paddingVertical: SIZES.font}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TouchableOpacity onPress={() => console.log('Menu on clicked')}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                console.log('Cart on clicked');
              }}>
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={{marginTop: SIZES.base, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.h1}}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
        <ScrollView>
              
      {renderTitle(selectedTab.title)}
      

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  saleDealContainer:{
    position: 'absolute', 
    left: '10%', right: '10%', 
    width: 40, height: 35, 
    borderBottomRightRadius: 8, 
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Notification;
