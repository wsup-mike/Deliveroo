import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
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

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-4xl font-bold">45-55 minutes</Text>
                    </View>
                    <Image 
                        source={{
                            uri: 'https://links.papareact.com/fls'
                        }}
                        className="h-20 w-20"
                    />
                </View>
            </SafeAreaView>
        </View>

    )
}

export default DeliveryScreen