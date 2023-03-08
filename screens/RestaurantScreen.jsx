import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';

const RestaurantScreen = () => {
  
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

  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default RestaurantScreen