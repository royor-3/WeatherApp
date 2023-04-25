import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
    const { textContainer, texts, stylesText } = props

    return (
        <View style={textContainer}>
            {texts.map((text, index) => {
                return (
                    <Text
                        key={index}
                        style={
                            stylesText.length === 1
                                ? stylesText[0]
                                : stylesText[index]
                        }
                    >
                        {text}
                    </Text>
                )
            })}
        </View>
    )
}

export default RowText
