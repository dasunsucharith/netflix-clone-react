import React, { useState, useEffect } from 'react'
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    /* A snipet of code which runs based on a pecific condition/ variable */
    useEffect(() => {
        /* if [], run once when the row loads, and dont run again */
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.table(movies)

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className='row_posters'>
                {/* Several row posters */}

                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            {/* container -> posters */}
        </div>
    )
}

export default Row