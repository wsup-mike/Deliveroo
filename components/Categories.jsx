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
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing1" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing2" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing3" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing4" />
    <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing5" />
    </ScrollView>
  )
}

export default Categories;