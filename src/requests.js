const API_KEY = "5da75727339d42707ae444f8e95f7e15";

const requests = {
    // fetchTrending: `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10740`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
