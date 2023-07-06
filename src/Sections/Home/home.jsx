import React from "react";
import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import logo from "../../Pics/anime.jpg";
import Featured from "../../Components/featured/Featured";
import pokemon from "../../Pics/pokemonpaldea.png";
import Slider from "../../Components/featured/Slider";
import List from "../../Components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <List listTitle="Continue To Watch" />
      <List listTitle="Latest & Trending" />
      <List listTitle="Web-Series/Shows" />
      <List listTitle="Popular Movies" />
    </div>
  );
};

export default Home;
