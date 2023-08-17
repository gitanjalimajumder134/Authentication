import { View, Text, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button'


const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <SafeAreaView style={{flex:1,backgroundColor: COLORS.white}}>
      <View style={{flex:1, marginHorizontal: 22}}>
        <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black
          }}>
           Hey, Welcome Back !
          </Text>
          <Text style={{
            fontSize:16,
            color: COLORS.black
          }}>
            Hello again you have been missed!
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
            style={{width: "100%", color: COLORS.black}}/>
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
            secureTextEntry={isPasswordShown}
            style={{width: "100%", color: COLORS.black}}/>
            <TouchableOpacity
            onPress={()=>setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12
            }}>
              {
                isPasswordShown == true ?(
                <Icon name="eye-off" size={24} color={COLORS.black} /> 
                ) : (
                <Icon name="eye" size={24} color={COLORS.black} /> 
                )
              }
             
            </TouchableOpacity>
           
          </View>
        </View>
        <Button
            title ="Login"
            onPress={() => navigation.navigate('Chatbot')}
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
            />
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
              <View
                style={{
                  flex:1,
                  height: 1,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: 10
                }}
              />
              <Text style={{fontSize: 14, color: COLORS.black}}>Or Login with</Text>
              <View
                style={{
                  flex:1,
                  height: 1,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: 10
                }}
              />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <TouchableOpacity
              onPress={()=> console.log("Pressed")}
              style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 52,
                borderWidth:1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10
              }}>
                <Image 
                  source={require('../assets/facebook.png')}
                  style={{
                    height:36,
                    width:36,
                    marginRight: 8
                  }}
                  resizeMode='contain'
                />
                <Text style={{color:COLORS.black}}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=> console.log("Pressed")}
              style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 52,
                borderWidth:1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10
              }}>
                <Image 
                  source={require('../assets/google.png')}
                  style={{
                    height:36,
                    width:36,
                    marginRight: 8
                  }}
                  resizeMode='contain'
                />
                <Text style={{color:COLORS.black}}>Google</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 22
            }}>
              <Text style={{fontSize:16, color:COLORS.black}}>Don't have an Account?</Text>
              <Pressable onPress={()=>navigation.navigate("Signup")}>
              <Text style={{
                fontSize:16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6
              }}>
                Register
              </Text>
              </Pressable>

            </View>
    </View>
    </SafeAreaView>
    
  )
}

export default Login