import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
// import Video from 'react-native-video'
// import { Constants } from 'expo-av';
// import { Platform } from 'react-native';


const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/motorbikes.gif")}
        animation="slideInUp"
        iterationCount={1}
        className='h-60 w-60'
      />
      
      
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;    