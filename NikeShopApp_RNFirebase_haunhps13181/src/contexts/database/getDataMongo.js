import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios';
const hostUrl = 'http://10.0.2.2:3003/products/products-send';

const getDataMongo = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(hostUrl)
        .then((res) => res.json())
        .then((json) => alert(error))
        .finally(setLoading(false));
    });
    
    return (
        <SafeAreaView>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList 
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({item}) => {
                        return(
                            <Text>{item._id}</Text>
                        )
                    }}
                />
            )}
            <Text></Text>
        </SafeAreaView>
    )
}

export default getDataMongo

const styles = StyleSheet.create({})
