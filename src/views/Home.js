import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../API";
import "./Home.css";

//components
import Header from "../components/Header";
import Games from "../components/Games";
import Controls from "../components/Controls";

//replace API_KEY with your API Key
let API = API_KEY;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [unfilteredGames, setUnfilteredGames] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.giantbomb.com/api/games/?api_key=${API}&field_list=name,deck,original_release_date,image&format=json&offset=${offset}`
      );
      setGames(response.data.results);
      setUnfilteredGames(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };
  console.log("games from home components", games);
  return (
    <div className="home">
      <Header />
      <Controls />
      <Games games={games} loading={loading} />
    </div>
  );
};

export default Home;
