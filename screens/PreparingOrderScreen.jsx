import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import Video from 'react-native-video'


const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      {/* <Animatable.Image 
        source={require('../assets/online-food-order-selection.mp4')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        duration={4500}
      /> */}

      <Animatable.View animation="slideInUp">
        <Video 
            source={require('../assets/online-food-order-selection.mp4')}
            style={{ width: 300, height: 300}}
            muted={true}
            repeat={true}
            resizeMode="contain"
        />
      </Animatable.View>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen;