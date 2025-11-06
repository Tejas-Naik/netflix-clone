import axios from '../axios';
import React, { useEffect, useState } from 'react';
import "../Banner.css";
import requests from '../requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
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
    // Playing trialer
    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch(err => console.error(err))
        }
    }

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
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    {/* div > 2 buttons */}
                    <div className='banner__buttons'>
                        <button onClick={() => handleClick(movie)} className='banner__button'>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>
                    <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
                </div>

            </header>
            <div className='banner--fadeBottom'></div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Banner
