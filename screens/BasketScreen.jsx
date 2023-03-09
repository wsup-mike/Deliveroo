import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectRestaurant } from '../features/restaurantSlice';
import { useDispatch } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanityUrl';
import Currency from 'react-currency-formatter';
import { removeFromBasket } from '../features/basketSlice';
import { selectBasketTotal } from '../features/basketSlice';


// here we want to capture all details of the 'restaurant' 
const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant) // extracts restaurant name
    const items = useSelector(selectBasketItems) // extracts all current items in basket
    const dispatch = useDispatch(); // unlock dispatch
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const basketTotal = useSelector(selectBasketTotal);

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
            <View className="p-5 border-b border-[#00ccbb]">
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>
            </View>
            <TouchableOpacity 
                className="rounded-full bg-gray-100 absolute top-3 right-5"
                onPress={navigation.goBack}
            >
                <XCircleIcon color="#00ccbb" height={50} width={50} />
            </TouchableOpacity>
            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white">
                <Image 
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="w-7 h-7 bg-gray-300 p-4 rounded-full"
                />
                <Text className="flex-1">Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00ccbb]">Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="divide-y divide-gray-200">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key} className="flex-row items-center space-x-3 px-5 py-3 bg-white">
                        <Text>{items.length} x</Text>
                        <Image 
                            source={{ uri: urlFor(items[0]?.image).url() }}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <Text>
                            <Currency quantity={items[0]?.price} currency="USD" />
                        </Text>
                        <TouchableOpacity
                            
                            onPress={() => dispatch(removeFromBasket({ id: key}))}
                        >
                            <Text className="text-[#00ccbb] text-xs">Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={basketTotal} currency="USD" />
                    </Text>
                </View>
                
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen;