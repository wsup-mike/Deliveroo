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
            <TouchableOpacity
                className="bg-[#00bbcc] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
            >
                <Text>{items.length}</Text>
                <Text>View Basket</Text>
                <Text className="text-lg text-white font-extrabold"><Currency quantity={basketTotal} currency="USD" /></Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;