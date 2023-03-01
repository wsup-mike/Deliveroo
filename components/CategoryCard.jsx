import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const CategoryCard = () => {
  return (
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
    >
      <Text>CategoryCard</Text>
    </ScrollView>
  )
}

export default CategoryCard