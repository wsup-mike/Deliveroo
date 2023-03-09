import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';


// Requires access to our basket!
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    return (
        <View>
            <Text>BasketIcon</Text> 
        </View>
    )
}

export default BasketIcon