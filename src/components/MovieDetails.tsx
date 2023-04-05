import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem';

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

                {/* Overview */}
                <Text style={styles.title}>
                    Overview
                </Text>

                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>

                {/* Budget */}
                <Text style={styles.title}>
                    Budget
                </Text>
                <Text style={{ fontSize: 18 }}>
                    ${movieFull.budget.toLocaleString('en-US')}
                </Text>

            </View>
            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ ...styles.title, marginHorizontal: 20 }}>
                    Cast
                </Text>
                <CastItem actor={cast[0]} />
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    }
});
