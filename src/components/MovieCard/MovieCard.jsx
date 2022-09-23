import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const movie = props?.movie;
  const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";
  return (
    <Link
      to={`/movie/${movie.id}`}
      target="_blank"
      className={styles.container}
      title={movie?.title}
    >
      <img src={`${imagePrefixUrl}${movie?.poster_path}`} alt={movie?.title} />
      <p>{movie?.title}</p>
    </Link>
  );
};

export default MovieCard;
