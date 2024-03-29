import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanityUrl';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  // const route = useRoute();
  const dispatch = useDispatch();

  const { params: { // instead to destructure all this from RestaurantCard instead of using route.params.___ 
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  
  },} = useRoute();

  useEffect(() => { // to capture all restaurant details in global store when this screen mounts
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }))
  }, [dispatch])
  
  useLayoutEffect(() => { // used to hide the navigation header before the screen is painted 
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <>
    <BasketIcon />
      <ScrollView>
        {/* <Text>{title}</Text> */}
        <View className="relative">
          <Image 
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity 
            className="absolute top-10 left-5 p-2 bg-gray-50 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
            <View className="px-4 pt-4">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> · {genre}
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <MapPinIcon color="gray" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">Nearby · {address}</Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon 
                color="gray"
                opacity={0.6}
                size={20}
              />
              <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
              <ChevronRightIcon color="#00ccbb"/>
            </TouchableOpacity>
            <View className="pb-36">
              <Text className="px-4 pt-4 mb-3 font-bold text-xl">Menu</Text>
              {/* Dish rows here. To map over a restaurant's 'dishes[]' array to populate this area's content  */}
              {dishes.map((dish) => (
                <DishRow 
                  key={dish._id}
                  id={dish._id}
                  name={dish.name}
                  description={dish.short_description}
                  price={dish.price}
                  image={dish.image}
                />
              ))}
            </View>
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen;