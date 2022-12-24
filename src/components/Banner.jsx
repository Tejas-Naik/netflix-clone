import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../Banner.css";
import requests from '../requests';

function Banner() {
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomNumber = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(
                request.data.results[randomNumber]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div>
            <header
                className='banner'
                style={{
                    backgroundSize: `cover`,
                    backgroundImage: `url(
                        "${baseUrl}/${movie?.backdrop_path}"
                    )`,
                    backgroundPosition: "center center"
                }}
            >
                <div class="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    {/* div > 2 buttons */}
                    <div className='banner__buttons'>
                        <button className='banner__button'>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>
                    <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
                </div>

            </header>
            <div className='banner--fadeBottom'></div>
        </div>
    )
}

export default Banner
