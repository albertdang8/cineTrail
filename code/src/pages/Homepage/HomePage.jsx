import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";
import "./HomePage.css";

function HomePage({ baseUrl, apiKey, imageBaseUrl }) {
const [popularMovies, setPopularMovies] = useState([]);
const [topRatedMovies, setTopRatedMovies] = useState([]);

  return (
    <div className="homepage-container">
      <Slider apiKey={apiKey} baseUrl={baseUrl} imageBaseUrl={imageBaseUrl} />
      <div className="movies-wrapper">
        <div className="popular-container">
          <h3 className="popular-title">Popular Movies</h3>
          <div className="popular-cards-wrapper">

          </div>
        </div>
        <div className="top-rated-container">
          <h3>Top Rated Movies</h3>
          <div className="top-rated-cards-wrapper">

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
