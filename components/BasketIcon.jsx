import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';
import BasketScreen from '../screens/BasketScreen';



// Requires access to our basket!
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal) // generates single value total for entire basket

    if (items.length === 0) return null; // prevent basket from appearing if nothing yet placed
    
    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                className="bg-[#00bbcc] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
                onPress={() => navigation.navigate('Basket')}
            >
                <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
                    {items.length}
                </Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="USD" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon;