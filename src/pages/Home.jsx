import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/_bgMeat.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Dagangan Mantaff</h1>
        <p>Menyediakan Aneka Daging Segar!</p>
        <Link to="/menu">
          <button>Pesan Sekarang!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
