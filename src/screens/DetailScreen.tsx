import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetail } from '../hooks/useMovieDetail';

const scrHeight = Dimensions.get('screen').height
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    useMovieDetail(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imgBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Icon
                    name='star-outline'
                    color='gray'
                    size={20}
                />
                <Text style={styles.subTitle}>{movie.vote_average}</Text>
                <Text style={styles.title}>{movie.original_title}</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: 'red',
        // overflow: 'hidden',
        width: '100%',
        height: scrHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
    },
    posterImage: {
        flex: 1,
    },
    imgBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});