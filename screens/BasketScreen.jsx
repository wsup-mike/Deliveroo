import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectRestaurant } from '../features/restaurantSlice';
import { useDispatch } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';


// here we want to capture all details of the 'restaurant' 
const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant) // extracts restaurant name
    const items = useSelector(selectBasketItems) // extracts all current items in basket
    const dispatch = useDispatch(); // unlock dispatch
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => { // if 'items' value not changed, we wont recompute the value anymore
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems)
    }, [items]);

    // console.log(groupedItemsInBasket);

    return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View>
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400 ">{restaurant.title}</Text>
                </View>
            </View>
            <TouchableOpacity 
                className="rounded-full bg-gray-100 absolute top-3 right-5"
                onPress={navigation.goBack}
            >
                <XCircleIcon color="#00ccbb" height={50} width={50} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen;