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
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
      <p> &copy; 2022 Best Meat</p>
    </div>
  );
}

export default Footer;
