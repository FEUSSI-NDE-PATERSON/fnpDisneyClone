import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchApi } from "../apiREquest/apiRequest";
import Movie from "./Movie";
import Result from "../component/Result";

function Search() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(movie);
  useEffect(() => {
    fetchApi(`search/movie?query=${id.substring(1)}`)
      .then((data) => setMovie(data.results))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div className="text-3xl text-blue-500 mt-3">
      <Result movies={movie} />
    </div>
  );
}

export default Search;
