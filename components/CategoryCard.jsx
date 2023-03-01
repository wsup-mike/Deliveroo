import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const CategoryCard = ({ imgUri, title }) => {
  return (
    <TouchableOpacity>
        <Image source={{ uri: imgUri }} />
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard