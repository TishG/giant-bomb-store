import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../API";
import "./Home.css";

//components
import Header from "../components/Header";
import Games from "../components/Games";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

//replace API_KEY with your API Key
let API = API_KEY;

const Home = ({
  cart,
  filter,
  loading,
  add,
  currentGames,
  games,
  gamesPerPage,
  paginate
}) => {
  return (
    <div className="home">
      <Header cartNumber={cart.length} />
      <Search filter={filter} />
      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={games.length}
        paginate={paginate}
      />
      <Games currentGames={currentGames} loading={loading} add={add} />
    </div>
  );
};

export default Home;
