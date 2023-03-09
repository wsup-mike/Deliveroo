import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// here we want to capture all details of the 'restaurant' 
const BasketScreen = () => {
    const navigation = useNavigation();
    return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen;