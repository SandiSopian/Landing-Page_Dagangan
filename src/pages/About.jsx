import React from "react";
import BannerImage from "../assets/images/_bgMeat.jpg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../styles/About.css";
import LogoAbout from "../assets/images/_logoAbout.png";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="aboutBottom">
        <div className="logoAbout" style={{ backgroundImage: `url(${LogoAbout})` }}></div>
        <h1>About Us</h1>
        <p>
          <span>
            Selamat datang di Toko Daging <strong>Mang Umis.</strong>{" "}
          </span>
          <span>
            Kami menyediakan berbagai jenis bagian daging <i>Ayam</i> dan <i>Sapi</i>.
          </span>
          <br />
          <span>
            Pastinya segar setiap harinya dengan <u>harga dan kualitas bersaing.</u>{" "}
          </span>
          <br />
        </p>
        <p>
          <b>Kelebihan belanja di Toko Daging Mang Umis:</b>
          <br />
          <br />
          <span>- 100% HALAL</span>
          <br />
          <span>- Kami pastikan kualitas terbaik dengan harga bersaing </span>
          <br />
          <span>
            - Kami Toko daging terlengkap di pasar <i>Bingung Majalaya</i>
          </span>
          <br />
          <span>- Foto produk kami usahakan tersedia dengan stock yang ada di Toko kami</span>
          <br />
          <span>- Kami menjual daging segar setiap harinya</span>
          <br />
          <span>- Anda puas, kami senang ! !</span>
          <br />
          <br />
          <span>
            <LocationOnIcon />
            Jl. Stasiun, Majalaya, Kec. Majalaya, Kabupaten Bandung, Jawa Barat 40382
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
