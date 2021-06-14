import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Page2 = () => {
    return (
        <View style={styles.container}>
            <Text>Page2</Text>
        </View>
    )
}

export default Page2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
