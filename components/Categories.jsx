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
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingA" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingB" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingC" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingD" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingE" />
    </ScrollView>
  )
}

export default Categories;