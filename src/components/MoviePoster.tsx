import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { TouchableOpacity } from 'react-native';

interface Props {
    movie: Movie
    height?: number
    width?: number
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigator = useNavigation()


    return (
        <TouchableOpacity
            onPress={() => navigator.navigate('DetailScreen', movie)}
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri
                    }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});