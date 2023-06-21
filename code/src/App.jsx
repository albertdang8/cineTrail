import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import Slider from "./components/Slider/Slider";

import './App.css'


function App() {
  const apiKey = "6e3cfa8a59d38185c35ad08fb6420f20"
  const baseUrl = "https://api.themoviedb.org/3"
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage apiKey={apiKey} baseUrl={baseUrl} />} />

        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
