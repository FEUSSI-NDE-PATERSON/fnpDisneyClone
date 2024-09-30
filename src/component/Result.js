import React from "react";
import { Link } from "react-router-dom";

function Result({ movies }) {
  return (
    <div className="flex flex-wrap gap-5 mx-auto justify-center">
      {movies.map((video) => (
        <div key={video?.id}>
          <Link to={`/movie/:${video?.id}`}>
            <img
              src={
                video?.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${video.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original${video.poster_path}`
              }
              alt={video?.original_title || "Movie Image"}
              className=" h-80 w-80  sm:h-64 sm:w-64 "
            />
          </Link>
          <p className="text-white max-w-[250px] mt-2 text-xs">
            {video?.overview.slice(0, 50)}...
          </p>
        </div>
      ))}
    </div>
  );
}

export default Result;
