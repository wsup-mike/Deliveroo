import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRow = ({ id, title, featuredCategory, description  }) => {
  return (
    <View>
      <View>
        <Text className="font-bold text-lg" >{title}</Text>
        <ArrowRightIcon />
      </View>
    </View>
  )
}

export default FeaturedRow;