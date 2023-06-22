import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/HomePage";
import Slider from "./components/Slider/Slider";

import './App.css'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

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
