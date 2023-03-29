import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params

    return (
        <View>
            <Text>
                DetailScreen
            </Text>
        </View>
    )
}