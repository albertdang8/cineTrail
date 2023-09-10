import React, { useState, useEffect } from "react";
import axios from "axios";
import Genres from "../Genres/Genres";
import Ratings from "../Ratings/Ratings";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./Slider.css";

function Slider({baseUrl, apiKey}) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [movieRatings, setMovieRatings] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/upcoming?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data.results);
        setUpcomingMovies(res.data.results);
        const rating = res.data.results.map(movie => movie.vote_average / 2)
        setMovieRatings(rating);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL}${upcomingMovies[0]?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    position: "relative",
  };

  const handleRight = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex === upcomingMovies.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const handleLeft = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex === -1) {
        newIndex = upcomingMovies.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div style={sliderStyle}>
      <div className="slider-overlay"></div>
      <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow" />
      <MdKeyboardArrowRight onClick={handleRight} className="right-arrow" />
      <div className="slider-info">
        <h1>{upcomingMovies[index]?.title}</h1>
        <p className="slider-description">
          {upcomingMovies[index]?.overview.slice(0, 130)}...
        </p>
        <Genres moviesGenres={upcomingMovies[index]?.genre_ids} baseUrl={baseUrl} apiKey={apiKey}/>
        <p>Release Date: {upcomingMovies[index]?.release_date}</p>
        <Ratings movieRating={movieRatings[index]} />
      </div>
    </div>
  );
}

export default Slider;
