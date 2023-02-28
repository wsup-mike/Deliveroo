import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-red-400">This is my Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
