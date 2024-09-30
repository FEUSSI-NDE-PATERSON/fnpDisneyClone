import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tmdb, { fetchApi } from "../apiREquest/apiRequest";
import Result from "./Result";
import { toast } from "react-toastify";

function Recommendation() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  toast.success("loading.....");
  useEffect(() => {
    fetchApi(`tv/airing_today?page=${page}`)
      .then((data) => {
        setMovies(data?.results);
        toast.success("loaded");
      })
      .catch((error) => console.error("Error fetching videos:"));
  }, [page]);
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <h4 className="m-5 font-bold text-white text-2xl">Recommendation</h4>
      <Result movies={movies} />
      <div className="flex  mt-3">
        <button
          onClick={() => setPage(page - 1)}
          className="p-5 bg-gray-600 text-white text-2xl border-none"
        >
          &#60;
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="p-5 bg-gray-600  text-white text-2xl ml-2 border-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Recommendation;
