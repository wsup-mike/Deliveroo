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

console.log(client);

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
        );

        const parsedData = JSON.parse(
          JSON.stringify(data).replace(/\bURLSearchParams\b/g, "querystring")
        );

        setFeaturedCategories(parsedData);
        console.log(featuredCategories);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `
  //         *[_type == "featured"] {
  //           ...,
  //           restaurants[]->{
  //             ...,
  //             dishes[]->,
  //             type->{
  //               name
  //             }
  //           },
  //         }
  //       `
  //     )
  //     .then((data) => {
  //       // Replace URLSearchParams usage with querystring
  //       const parsedData = JSON.parse(
  //         JSON.stringify(data).replace(/\bURLSearchParams\b/g, "querystring")
  //       );
  //       // use new instance URLSearchParams
  //       // const params = new URLSearchParams();
  //       // const parsedData = JSON.parse(
  //       //   JSON.stringify(data).replace(/\bURLSearchParams\b/g, "params")
  //       // );
  //       setFeaturedCategories(parsedData);
  //       console.log(featuredCategories);
  //     });
  // }, []);

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
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="Featured"
        />
        <FeaturedRow
          id="1234"
          title="Check out these discounts!"
          description="Look at these customer discounts"
          featuredCategory="Discounts"
        />
        <FeaturedRow
          id="12345"
          title="New offer expires soon!"
          description="New offers from our sponsors"
          featuredCategory="Offers"
        />
        <FeaturedRow
          id="123456"
          title="Other stuff here"
          description="Some other stuff"
          featuredCategory="Other"
        />

        {/* Featured */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
