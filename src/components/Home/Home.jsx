import React, { useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import styles from "./Home.module.css";
import { getPopularMovies } from "../../api/movies";
import MovieCard from "../MovieCard/MovieCard";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const fetchPopularMovies = () => {
    getPopularMovies().then((res) => {
      setIsDataLoaded(true);
      if (!res) return;
      setTotalPages(res.total_pages);
      setPopularMovies(res.results);
    });
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div>
      {!isDataLoaded ? (
        "Loading................"
      ) : (
        <div className={styles.innerContainer} />
      )}
      <Paginate onEnd={() => console.log("Near End")}>
        {popularMovies.map((item) => {
          <MovieCard movie={item} key={item.id} />;
        })}
      </Paginate>
    </div>
  );
};

export default Home;

// Part 2 7:46
