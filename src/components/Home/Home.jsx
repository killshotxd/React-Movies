import React, { useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import styles from "./Home.module.css";
import { getPopularMovies } from "../../api/movies";
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const fetchPopularMovies = () => {
    getPopularMovies().then((res) => {
      if (!res) return;
      console.log(res);
    });
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div>
      <Paginate onIntersection={(isOnEnd) => setIsNearEnd(isOnEnd)}></Paginate>
    </div>
  );
};

export default Home;

// Part 2 7:46
