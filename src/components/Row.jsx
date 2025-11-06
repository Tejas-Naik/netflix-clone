import axios from '../axios';
import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import "../Row.css";

function Row(props) {
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const { fetchUrl } = props
    const [movies, setMovies] = useState([]);
    // UseEffect is going to run when the state of variable changes 2 params (callBkFn, [state]);
    useEffect(() => {
        // if [] means run one and var we can run this fn every time the var changes
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // For playing trailer
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

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row__posters">
                {/* several row__posters */}
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                        src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
