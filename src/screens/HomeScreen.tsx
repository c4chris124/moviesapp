import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {
    const { moviesNowPlaying, isLoading } = useMovies()


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={50} />
            </View>
        )
    }

    return (
        <View>
            <MoviePoster />
        </View>
    )
}
