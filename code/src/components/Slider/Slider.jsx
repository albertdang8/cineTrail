import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Slider.css";

function Slider({ baseUrl, apiKey }) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data.results);
        setUpcomingMovies(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  const sliderStyle = {
    backgroundImage: `url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    position: "relative",
  };

  return (
    <div style={sliderStyle}>
      <div className="slider-overlay"></div>
      <div className="slider-info">
        <h1>{upcomingMovies[index]?.title}</h1>
        <p className="slider-description">
          {upcomingMovies[index]?.overview.slice(0, 130)}...
        </p>
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>
      </div>
    </div>
  );
}

export default Slider;
