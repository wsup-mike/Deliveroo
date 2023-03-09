import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';


// Requires access to our basket!
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal) // generates single value total for entire basket
    return (
        <View className="absolute bottom-10 w-full z-50 ">
            <Text>BasketIcon</Text> 
        </View>
    )
}

export default BasketIcon;