import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanityUrl';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({
    id,
    name,
    description,
    price,
    image,
}) => {

    const [isPressed, setIsPressed] = useState(false);

  return (
    <>
    <TouchableOpacity
        className="bg-white border p-4 border-gray-200 "
        onPress={() => setIsPressed(!isPressed)}
    >
        <View className="flex-row">
            <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2"><Currency quantity={price} currency="USD" /></Text>
            </View>
            <View>
                <Image 
                    source={{ uri: urlFor(image).url() }}
                    className="h-20 w-20 bg-gray-300 p-4"
                    style={{ borderWidth: 1, borderColor: '#f3f3f4' }}
                />
            </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View>
            <View className="flex-row">
                <TouchableOpacity>
                    <MinusCircleIcon 
                        // color={items.length > 0 ? "00CCBB" : "gray"}
                        size={40}
                    />
                </TouchableOpacity>
                <Text className="">0</Text>
                <TouchableOpacity>
                    <PlusCircleIcon 
                        // color={items.length > 0 ? "00CCBB" : "gray"}
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow;