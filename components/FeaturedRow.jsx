import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import { client } from '../sanity';
import "react-native-url-polyfill/auto";
import querystring from "querystring";


//4 featured category ids
// 07be6f5c-e806-4b93-b1b1-b35bf7ebaaf4
// 1816b133-f591-4169-b0d4-1c13b6cd8479
// 474cd9ae-ad57-41ce-a8c8-404e78a3963b
// a0cb9eb9-22c2-4df3-a8bc-0c2f1e79de2a

const FeaturedRow = ({ id, title, featuredCategory, description  }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try { 
        const data = await client.fetch(
          `
          *[_type == "featured" && _id == $id ] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type-> {
                name
              }
            },
          } [0]
          `
            // `
            // *[_type == "featured" ] 
            // `
        , { id: id })

        const parsedData = JSON.parse(
          JSON.stringify(data).replace(/\bURLSearchParams\b/g, "querystring")
        );

        setRestaurants(parsedData)
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(restaurants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg" >{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      
      {restaurants.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
              paddingHorizontal: 15,
          }}
          className="pt-4"
        >
          {/* Restaurant Cards here */}
          {restaurants?.map((restaurant) => (
            <RestaurantCard 
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default FeaturedRow;