import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Banner */}
      <Banner />
      <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
