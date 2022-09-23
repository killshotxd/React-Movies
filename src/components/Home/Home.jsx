import React from "react";
import Paginate from "../Paginate/Paginate";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Paginate>
        <div style={{ height: "500px", width: "100%", background: "pink" }} />
        <div style={{ height: "500px", width: "100%", background: "orange" }} />
        <div style={{ height: "500px", width: "100%", background: "tomato" }} />
      </Paginate>
    </div>
  );
};

export default Home;

// Part 2 7:46
