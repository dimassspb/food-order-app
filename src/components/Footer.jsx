import React from "react";
// import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <FacebookIcon />
        <TelegramIcon />
        <p style={{textAlign: 'center'}}>&copy; 2021 Food.com </p>
      </div>
    </div>
  );
};

export default Footer;
