import { View, Text, TextInput, Image, Pressable, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import COLORS from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";


const Chatbot = () => {
    const [data, setData] = useState([])
    const apiKey = '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'
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
    const [textInput, setTextInput] = useState('');

    const HandleSend = async () => {
        const prompt = textInput
        const response = await axios.post(apiUrl, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.5
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        const text = response.data.choices[0].text
        setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}])
        setTextInput('')
    }
    return (
        <View style={{
            flex:1,
            backgroundColor: 'white',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 70,
                color: COLORS.black
            }}>AI Chatbot</Text>
            
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                style={{backgroundColor: 'white', width: '102%', margin: 10}}
                renderItem={({item}) => (
                    <View style={{flexDirection: 'row', padding: 10}}>
                        <Text style={{fontWeight: 'bold', color: item.type === 'user' ? 'green': 'red'}}>{item.type === 'user'? 'You': 'Bot'}</Text>
                        <Text style={{fontSize: 16, color: COLORS.black}}>{item.text}</Text>
                    </View>
                )}
            />
            <View style={{flexDirection:'row', justifyContent: 'space-around', width:'100%'}}>
            <TextInput
            style={{
                borderWidth: 1,
                borderColor: COLORS.black,
                width: '70%',
                height: 60,
                marginBottom: 10,
                borderRadius: 40,
                color: COLORS.black
            }}
            value={textInput}
            onChangeText={text => setTextInput(text)}
            placeholder='Ask me anything'
            placeholderTextColor="#000"
            />
            <TouchableOpacity style={{
                backgroundColor: 'green',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10
                }} 
                onPress={HandleSend}>
                {/* <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: COLORS.white
                }}>Let's Go</Text> */}
                <Icon name="caret-forward" size={24} color={COLORS.white} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chatbot