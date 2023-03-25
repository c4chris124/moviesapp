import { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { MovieDbNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])

    const getMovies = async () => {
        const res = await movieDB.get<MovieDbNowPlaying>('/now_playing')
        setMoviesNowPlaying(res.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        // now_playing movies call
        getMovies()
    }, [])

    return {
        moviesNowPlaying,
        isLoading
    }
}
