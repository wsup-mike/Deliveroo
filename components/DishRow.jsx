import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanityUrl';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';

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
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
                onPress={() => setIsPressed(!isPressed)}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">
                            <Currency quantity={price} currency="USD" />
                        </Text>
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
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3"> 
                        <TouchableOpacity>
                            <MinusCircleIcon 
                                // color={items.length > 0 ? "00CCBB" : "gray"}
                                size={40}
                                color="#00ccbb"
                            />
                        </TouchableOpacity>
                        <Text className="">0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon 
                                // color={items.length > 0 ? "00CCBB" : "gray"}
                                color="#00ccbb"
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