import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const { iconContainer, iconName, iconSize, iconColor, text, textStyles } =
        props
    return (
        <View style={iconContainer}>
            <Feather name={iconName} size={iconSize} color={iconColor} />
            <Text style={textStyles}>{text}</Text>
        </View>
    )
}

export default IconText
