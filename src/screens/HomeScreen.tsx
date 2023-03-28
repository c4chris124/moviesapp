import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

import { RootStackParams } from '../navigation/Navigation'

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window')

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> { }

export const HomeScreen = ({ navigation }: Props) => {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={50} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{ height: 440, }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                <HorizontalSlider title='Popular Movies' movies={popular} />
                <HorizontalSlider title='Top Rated' movies={topRated} />
                <HorizontalSlider title='Upcoming' movies={upcoming} />
            </View>
        </ScrollView>
    )
}
