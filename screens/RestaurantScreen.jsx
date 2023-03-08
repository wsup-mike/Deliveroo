import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanityUrl';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  // const route = useRoute();
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

  useLayoutEffect(() => { // used to hide the navigation header before the screen is painted 
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <ScrollView>
      {/* <Text>{title}</Text> */}
      <View className="relative">
        <Image 
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity className="absolute top-10 left-5 p-2 bg-gray-50 rounded-full">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen