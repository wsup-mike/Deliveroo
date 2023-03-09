import { View, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectRestaurant } from '../features/restaurantSlice';
import { useDispatch } from 'react-redux';

// here we want to capture all details of the 'restaurant' 
const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant) // extracts restaurant name
    const items = useSelector(selectBasketItems) // extracts all current items in basket
    const dispatch = useDispatch(); // unlock dispatch
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => { // if 'items' value not changed, we wont recompute the value anymore
        const groupedItems = items.reduce(() => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems)
    }, [items]);

    return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen;