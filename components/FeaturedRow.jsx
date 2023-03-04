import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import { client } from '../sanity';
import "react-native-url-polyfill/auto";
import querystring from "querystring";


const FeaturedRow = ({ id, title, featuredCategory, description  }) => {
  const [featuredRow, setFeaturedRow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try { 
        const data = await client.fetch(`*[_type == "restaurant"]`);

        const parsedData = JSON.parse(
          JSON.stringify(data).replace(/\bURLSearchParams\b/g, "querystring")
        );

        setFeaturedRow(parsedData)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(featuredRow);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg" >{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* Restaurant Cards here */}
        {featuredRow?.map((restaurant) => {
          <RestaurantCard 
            key={restaurant._id}
            id={restaurant._id}
            // imgUrl={restaurant.}
            image={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            // genre={restaurant.}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={[restaurant.dishes]}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        })}



        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Rowie's Bakery"
            rating={4.5}
            genre="Filipino Bakery"
            address="5664 N Lincoln Chicago, IL 60659"
            short_description="This is a test"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Rowie's Bakery"
            rating={4.5}
            genre="Filipino Bakery"
            address="5664 N Lincoln Chicago, IL 60659"
            short_description="This is a test"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Rowie's Bakery"
            rating={4.5}
            genre="Filipino Bakery"
            address="5664 N Lincoln Chicago, IL 60659"
            short_description="This is a test"
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Rowie's Bakery"
            rating={4.5}
            genre="Filipino Bakery"
            address="5664 N Lincoln Chicago, IL 60659"
            short_description="This is a test"
            dishes={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
    
  )
}

export default FeaturedRow;