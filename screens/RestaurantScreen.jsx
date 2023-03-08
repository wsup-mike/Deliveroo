import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/core';

const RestaurantScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  )
}

export default RestaurantScreen