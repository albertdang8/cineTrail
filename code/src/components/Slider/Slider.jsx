import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Slider() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        axios.get(`${baseUrl}/movie/upcoming`)
    },[])

  return (
    <div>Slider</div>
  )
}

export default Slider