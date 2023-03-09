import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'



const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/motorbikes.gif")}
        animation="slideInUp"
        iterationCount={1}
        className='h-60 w-60'
      />
      
      <Animatable.Text 
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >Waiting for restaurant to accept your order...</Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;    