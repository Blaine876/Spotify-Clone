import React from "react";
import { Library, SearchBar, Favorites } from "../components";

import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <h1>Home</h1>
      <Library />
      <SearchBar />
      <Favorites />
    </div>
  );
}

export default Home;
