import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movies";
import styles from "./MoviePage.module.css";
const MoviePage = () => {
  const params = useParams();

  const movieId = params.movieId;

  const fetchMovieDetails = () => {
    getMovieDetails(movieId).then((res) => {
      if (!res) return;
      console.log(res);
    });
  };

  useEffect(() => {
    fetchMovieDetails();
  });

  return <div>MoviePage</div>;
};

export default MoviePage;
