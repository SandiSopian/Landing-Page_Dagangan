import React from "react";
import BannerImage from "../assets/images/bgMeat.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis dolores quod laboriosam ducimus, quo vero ipsa cupiditate aperiam officia magnam id est laudantium numquam inventore unde incidunt, accusamus recusandae!
        </p>
      </div>
    </div>
  );
}

export default About;
