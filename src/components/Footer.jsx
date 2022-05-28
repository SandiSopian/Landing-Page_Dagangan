import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p> Hubungi Kami:</p>
      <div className="socialMedia">
        <a href="https://www.facebook.com/een.nurhaeni.31508">
          <FacebookIcon />
        </a>
        <a href="https://api.whatsapp.com/send?text=Pesan Daging!&phone=+6281321349581" target="_blank">
          <WhatsAppIcon />
        </a>
        <a href="https://www.instagram.com/een.nurhaeni.31508">
          <InstagramIcon />
        </a>
      </div>
      <p> &copy; 2022 Best Meat</p>
    </div>
  );
}

export default Footer;
