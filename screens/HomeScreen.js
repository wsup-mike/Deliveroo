import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";
// import "url-search-params-polyfill";
import "react-native-url-polyfill/auto";
import querystring from "querystring";
// import { URL } from "whatwg-url";

// global.URL = URL;

// console.log(client);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `
            *[_type == "featured"] {
              ...,
              restaurants[]->{
                ...,
                dishes[]->,
                type->{
                  name
                }
              },
            }
          `
          // `*[_type == "featured"]`
        );

        const parsedData = JSON.parse(
          JSON.stringify(data).replace(/\bURLSearchParams\b/g, "querystring")
        );

        setFeaturedCategories(parsedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // client
  //   .fetch('*[_type == "restaurant"]')
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00ccbb"} />
          </Text>
        </View>

        <UserIcon size={35} color={"#00ccbb"} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00ccbb"} />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        {/* Featured */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
