import React, { useEffect } from "react";
import Paginate from "../Paginate/Paginate";
import styles from "./Home.module.css";
import { getPopularMovies } from "../../api/movies";
const Home = () => {
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
