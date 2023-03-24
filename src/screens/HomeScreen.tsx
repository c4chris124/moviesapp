import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation'

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}
