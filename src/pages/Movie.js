import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchApi } from "../apiREquest/apiRequest";
import { PlayArrow } from "@mui/icons-material";
import Result from "../component/Result";
import ReactPlayer from "react-player";
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState();
  console.log(movie);
  useEffect(() => {
    fetchApi(`movie/${id.substring(1)}/recommendations?language=en-US`)
      .then((data) => {
        setMovie(data?.results);
      })
      .catch((error) => console.error("Error fetching videos:"));

    fetchApi(`movie/${id.substring(1)}/videos`)
      .then((data1) => {
        setKey(data1?.results[0]?.key);
      })
      .catch((error) => console.error("Error fetching videos:"));
  }, [key,id]);
  return (
    <div className=" text-white ">
      {movie && (
        <>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${key}`}
            width="100%"
            height="50vh"
          />

          <div className="flex items-center ">
            <div className=" text-white ">
              <p className="text-gray-400 font-[roboto] font-bold">
                {movie.title}
              </p>
              <p className="text-gray-400 font-[roboto] font-bold">
                {movie.overview}
              </p>
              <p className="text-gray-400 font-[roboto] font-bold">
                {movie.release_date}
              </p>
              <p className="text-gray-400 font-[roboto] font-bold">
                {movie.runtime} mins
              </p>
            </div>
          </div>
          <div>
            <p>Recommended Videos </p>
            <Result movies={movie} />
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
