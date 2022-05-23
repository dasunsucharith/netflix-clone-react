import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* Several row posters */}

                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}
            </div>
            <YouTube videoId={trailerUrl} opts={opts} />
            {/* container -> posters */}
        </div>
    )
}

export default Row