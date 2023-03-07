import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import { client } from '../sanity';
// import category from '../sanity/schemas/category';
import { urlFor } from '../sanityUrl';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == 'category']
    `).then(data => {
      setCategories(data)
    })
  }, []);

  console.log(categories)
 
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
    {categories.map((category) => (
      <CategoryCard 
        key={category._id}
        imgUrl={urlFor(category.image).width(200).url()}
        title={category.name} 
      />
    ))}
    
    {/* <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing2" />  */}
    {/* <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingC" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingD" />
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title="TestingE" /> */}
    </ScrollView>
  )
}

export default Categories;