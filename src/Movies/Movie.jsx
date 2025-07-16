import React, { useState } from "react";
import { movies } from "./Data";
import "./Movie.css";

const Movie = () => {
  const [movieall, setMovieall] = useState(movies);
  const [active, setActive] = useState("All"); // enable active tracking

  function movieCat(cat) {
    setMovieall(movies.filter((data) => data.category === cat));
    setActive(cat); // set active category
  }

  const showAll = () => {
    setMovieall(movies);
    setActive("All"); // set active to All
  };

  return (
    <>
      <div className="main bg-teal-900">
        <div className="flex justify-center flex-wrap">
          <button
            onClick={showAll}
            className={active === "All" ? "activebtn" : ""}
          >
            All
          </button>
          <button
            onClick={() => movieCat("Action")}
            className={active === "Action" ? "activebtn" : ""}
          >
            Action
          </button>
          <button
            onClick={() => movieCat("Thriller")}
            className={active === "Thriller" ? "activebtn" : ""}
          >
            Thriller
          </button>
          <button
            onClick={() => movieCat("Animation")}
            className={active === "Animation" ? "activebtn" : ""}
          >
            Animation
          </button>
          <button
            onClick={() => movieCat("Horror")}
            className={active === "Horror" ? "activebtn" : ""}
          >
            Horror
          </button>
          <button
            onClick={() => movieCat("Drama")}
            className={active === "Drama" ? "activebtn" : ""}
          >
            Drama
          </button>
          <button
            onClick={() => movieCat("Sci-Fi")}
            className={active === "Sci-Fi" ? "activebtn" : ""}
          >
            Sci-Fi
          </button>
        </div>

        {/* Movie List */}
        <div className="flex justify-center">
          <div className="w-[90%] flex flex-wrap justify-center border rounded-xl border-orange-300">
            {movieall.map((data) => (
              <div
                className="w-[250px] text-center text-yellow-200 m-[30px]"
                key={data.id}
              >
                <img
                  src={data.poster_path}
                  className="mb-3 hover:transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-lg w-[200px] m-auto"
                  alt=""
                />
                <h1 className="font-bold font-stretch-150%">{data.title}</h1>
                <p>{data.release_date}</p>
                <p className="font-semibold italic border-b rounded-lg border-orange-300">
                  {data.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
