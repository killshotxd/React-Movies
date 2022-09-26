import React from "react";
import { useEffect, useState } from "react";
import { getGenre } from "../../api/movies";
import styles from "./Explore.module.css";
const Explore = () => {
  const [allGenres, setAllGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const fetchAllGenres = () => {
    getGenre().then((res) => {
      if (!res) return;
      setAllGenres(res.genres);
    });
  };

  const handleGenreClick = (genre) => {
    const tempGenres = [...selectedGenres];
    const currIndex = tempGenres.findIndex((item) => item.id === genre.id);

    if (currIndex < 0) {
      tempGenres.push(genre);
    } else {
      if (selectedGenres.length > 1) tempGenres.splice(currIndex, 1);
    }

    setSelectedGenres(tempGenres);
  };

  useEffect(() => {
    fetchAllGenres();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {allGenres.map((item) => (
          <div
            key={item.id + item.name}
            className={`${styles.chip} ${
              selectedGenres.find((elem) => elem.id === item.id)
                ? styles.activeChip
                : ""
            }`}
            onClick={() => handleGenreClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <p className={styles.title}>Explore Movie</p>
      <div className={styles.body}></div>
    </div>
  );
};

export default Explore;
