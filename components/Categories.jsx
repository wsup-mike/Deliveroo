import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import { client } from '../sanity';
import category from '../sanity/schemas/category';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == 'category']
    `).then(data => {
      setCategories(data)
    })
  }, []);
 
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
    {categories.map((category) => {
      <CategoryCard 
        key={category._id}
        imgUrl={category.image}
        title={category.name} 
      />
    })}
    
    {/* <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing2" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingC" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingD" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingE" /> */}
    </ScrollView>
  )
}

export default Categories;