import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectRestaurant } from '../features/restaurantSlice';

// here we want to capture all details of the 'restaurant' 
const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant) // extracts restaurant name
    const items = useSelector(selectBasketItems) // extracts all current items in basket

    return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen;