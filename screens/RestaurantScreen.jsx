import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';

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
      <Text>{title}</Text>
      <View>
     
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen