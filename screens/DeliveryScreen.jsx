import { View, Text } from 'react-native'
import React from 'react'
import useNavigation from '@react-navigation/native'
import { useSelector } from 'react-redux'

const DeliveryScreen = () => {
    const navigation = useNavigation(); // to include 'back' button
    return (
        <View>
        <Text>DeliveryScreen</Text>
        </View>
    )
}

export default DeliveryScreen