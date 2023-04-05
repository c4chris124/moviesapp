import React, { useState, useEffect } from 'react'
import movieDB from '../api/MovieDB'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditsInterface'

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFull
    cast: Cast[]
}

export const useMovieDetail = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailRes, castRes] = await Promise.all([movieDetailsPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailRes.data,
            cast: castPromise.data.cast
        })

    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }

}

