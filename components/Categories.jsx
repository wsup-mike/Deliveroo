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
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    </ScrollView>
  )
}

export default Categories;