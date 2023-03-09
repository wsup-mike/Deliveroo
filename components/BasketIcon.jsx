import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';



// Requires access to our basket!
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal) // generates single value total for entire basket
    
    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity>
                <Text>{items.length}</Text>
                <Text>View Basket</Text>
                <Text><Currency /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;