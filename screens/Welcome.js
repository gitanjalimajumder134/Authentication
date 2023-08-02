import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from "react-native-linear-gradient"
import COLORS from '../constants/colors'

export default function Welcome() {
  return (
    <LinearGradient
      style={{
        flex: 1
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View>
        <Image
          source 
        />  
      </View>
    </LinearGradient>
  )
}