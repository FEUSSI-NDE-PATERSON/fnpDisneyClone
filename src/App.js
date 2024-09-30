import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Search from "./pages/Search";
import Originals from "./pages/Originals";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Login from "./Login";
import Error from "./pages/Error";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/*" element={<Error />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
