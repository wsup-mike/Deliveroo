import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';


const DeliveryScreen = () => {
    const navigation = useNavigation(); // to include 'back' button
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00ccbb] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
            </SafeAreaView>
        </View>

    )
}

export default DeliveryScreen