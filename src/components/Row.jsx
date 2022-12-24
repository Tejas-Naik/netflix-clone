import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

    console.table(movies);

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="row__posters">
                {/* several row__posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
                        src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row
