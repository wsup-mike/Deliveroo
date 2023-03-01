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
    <Text>Categories (Bitches!)</Text>
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing" />
    </ScrollView>
  )
}

export default Categories;