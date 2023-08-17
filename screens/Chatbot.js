import { View, Text, TextInput, Image, Pressable, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import COLORS from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import TypingIndicator from '../components/TypingIndicator'


const Chatbot = () => {
    const [data, setData] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    // const apiKey = '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'
    const apiUrl = 'http://43.205.114.204/api/chatbot?message=React functional component vs Class component'
    const [textInput, setTextInput] = useState('');

    const handleTyping = (text) => {
        setTextInput(text);
        setIsTyping(text.length > 0);
      };

    const HandleSend = async () => {
        const prompt = textInput
        setIsTyping(true)
        const response = await axios.post(apiUrl, {
            
            "room" : "Test"

        },
        {
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': `Bearer ${apiKey}`
            // },
            // if (textInput) {
            //     setData([...data, { id: data.length + 1, text: textInput }]);
            //     setTextInput('');
            //     setIsTyping(false);
            //   }
        }
        )
        console.log('response', response.data.message)
        setIsTyping(false)
        const text = response.data.message
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
                style={{backgroundColor: 'white', margin: 10}}
                renderItem={({item}) => (
                    <View style={{flexDirection: 'column', padding: 10 }}>
                    <View style={[styles.container, item.type === 'user' ? styles.user : styles.ai]} >
                        <Text style={{fontWeight: 'bold', color: item.type === 'user' ? 'green': 'red'}}>{item.type === 'user'? 'You': 'Bot'}</Text>
                        <Text style={{fontSize: 16, color: COLORS.black}}>{item.text}</Text>
                    </View>
                    
                    </View>
                    
                )}
            />
            {isTyping && <TypingIndicator />}
            <View style={{flexDirection:'row', justifyContent: 'space-around', width:'100%'}}>
            <TextInput
            style={{
                borderWidth: 1,
                borderColor: COLORS.black,
                width: '70%',
                height: 60,
                paddingLeft: 10,
                marginBottom: 10,
                borderRadius: 40,
                color: COLORS.black
            }}
            value={textInput}
            onChangeText={text => setTextInput(text)}
            placeholder='Ask me anything.......'
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    user: {
        backgroundColor: '#a4c9ff',
        alignSelf: 'flex-end'
    },
    ai: {
        backgroundColor: '#e6e6e6',
        alignSelf: 'flex-start'
    }
        
})