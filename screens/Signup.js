import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import { TouchableOpacity } from 'react-native'


const Signup = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: COLORS.white}}>
      <View style={{flex:1, marginHorizontal: 22}}>
        <View style={{marginHorizontal: 22}}>
          <Text style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black
          }}>
            Create Account
          </Text>
        </View>
        <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color: COLORS.black
          }}>Email Address</Text>
          <View style={{
            width:"100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput 
            placeholder='Enter your Email Address'
            placeholderTextColor={COLORS.black}
            keyBoardType='email-address'
            style={{width: "100%"}}/>
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color: COLORS.black
          }}>Mobile Number</Text>
          <View style={{
            width:"100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingLeft: 22
          }}>
            <TextInput 
            placeholder='+91'
            placeholderTextColor={COLORS.black}
            keyBoardType='numeric'
            style={{
              width: "12%",
              borderRightWidth: 1,
              borderLeftColor: COLORS.grey,
              height: "100%"
              }}/>

            <TextInput
            placeholder='Enter your phone number'
            placeholderTextColor={COLORS.black}
            keyBoardType='numeric'
            style={{
              width: "80%",
              
              }}
            />

          </View>
        </View>
        <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
            color: COLORS.black
          }}>Password</Text>
          <View style={{
            width:"100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput 
            placeholder='Enter your Password'
            placeholderTextColor={COLORS.black}
            secureTextEntry
            style={{width: "100%"}}/>
            <TouchableOpacity
            style={{
              position: "absolute",
              right: 12
            }}>
              
            </TouchableOpacity>
          </View>
        </View>

    </View>
    </SafeAreaView>
    
  )
}

export default Signup