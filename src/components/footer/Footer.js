import React from "react";
import waLogo from "../../assets/images/whatsapp.svg";
import igLogo from "../../assets/images/instagram.svg";
import fbLogo from "../../assets/images/facebook.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h2>Hubungi Kami</h2>
      <div className="footer-content">
        <div className="footer-content-text">
          <h3>Alamat Kami</h3>
          <p>
            Jl. Teluk Tiram Darat, Telawang, Kec. Banjarmasin Bar., Kota
            Banjarmasin, Kalimantan Selatan 70114
          </p>
          <div className="footer-logo">
            <a href="#wa">
              <img src={waLogo} alt="whatsapp" id="footer-logo-wa" />
            </a>
            <a href="#ig">
              <img src={igLogo} alt="instagram" id="footer-logo-ig" />
            </a>
            <a href="#fb">
              <img src={fbLogo} alt="facebook" id="footer-logo-fb" />
            </a>
          </div>
          <span id="footer-line"></span>
        </div>
        <div className="footer-maps">
          <iframe
            style={{
              border: "0",
            }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2368.348455150169!2d114.57958580360506!3d-3.332524926490352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4217dbc3f6e2b%3A0xbeca59ad87a3a885!2sEka%20Bakso!5e0!3m2!1sid!2sus!4v1664077243191!5m2!1sid!2sus"
            width="390"
            height="215"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="maps"
          ></iframe>
        </div>
      </div>
      <hr />
      <p id="footer-copyright">©2022-2022 --------, All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
