import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../API";
import "./Home.css";

//components
import Header from "../components/Header";
import Games from "../components/Games";
import Search from "../components/Search";

//replace API_KEY with your API Key
let API = API_KEY;

const Home = ({cart, filter, games, loading, add}) => {
  return (
    <div className="home">
      <Header cartNumber={cart.length}/>
      <Search filter={filter} />
      <Games games={games} loading={loading} add={add}/>
    </div>
  );
};

export default Home;
