import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Page3 = () => {
    return (
        <View style={styles.container}>
            <Text>Page3</Text>
        </View>
    )
}

export default Page3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
