import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary
    const outlinedColor = COLORS.white
    const bgColor = props.filled ? filledBgColor : outlinedColor
    const textColor = props.filled ? COLORS.white : COLORS.primary
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            ...styles.Button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}>
            <Text style={{fontSize: 18, ...{color: textColor}}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center"
    }
})