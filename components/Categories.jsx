import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
      }}
    >
      {/* Category Cards here */}
    {/* <Text>Categories (Bitches!)</Text> */}
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing1" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing2" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingC" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingD" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingE" />
    </ScrollView>
  )
}

export default Categories;