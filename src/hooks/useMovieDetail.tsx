import React, { useState, useEffect } from 'react'
import movieDB from '../api/MovieDB'
import { MovieFull } from '../interfaces/movieInterface'

interface MovieDetails {
    isLoading: boolean
    movieFull: MovieFull
    cast: any[]
}

export const useMovieDetail = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>()

    const getMovieDetails = async () => {
        const res = await movieDB.get<MovieFull>(`/${movieId}`)
        console.log(res.data.overview);

    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        state
    }

}

