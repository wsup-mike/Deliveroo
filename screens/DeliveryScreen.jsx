import { View, Text } from 'react-native'
import React from 'react'
import useNavigation from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice';

const DeliveryScreen = () => {
    const navigation = useNavigation(); // to include 'back' button
    const restaurant = useSelector(selectRestaurant);
    
    return (
        <View>
        <Text>DeliveryScreen</Text>
        </View>
    )
}

export default DeliveryScreen