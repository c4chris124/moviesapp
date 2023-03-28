import { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesSate] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/popular')
        const popularPromise = movieDB.get<MovieDBResponse>('/top_rated')
        const topRatedPromise = movieDB.get<MovieDBResponse>('/now_playing')
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming')

        const res = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ])

        setMoviesSate({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upcoming: res[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        // now_playing movies call
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading,
    }
}
