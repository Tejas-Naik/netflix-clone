import axios from "axios";
import React from "react";
import './App.css';
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey There! Lets build netflix clone</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
