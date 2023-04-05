import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-outline'
                        color='gray'
                        size={16}
                    />
                    <Text> {movieFull.vote_average.toFixed(1)}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
            </View>
            {/* Casting */}
        </>
    )
}
