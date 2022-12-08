import React from "react";
import waLogo from "../../../assets/images/whatsapp.svg";
import igLogo from "../../../assets/images/instagram.svg";
import fbLogo from "../../../assets/images/facebook.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="kontak">
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
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.6180229558422!2d114.56846158843085!3d-3.347360698101017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42bc318f9db555ad!2zM8KwMjAnNDkuOCJTIDExNMKwMzQnMDkuNCJF!5e0!3m2!1sid!2sid!4v1670490201931!5m2!1sid!2sid"
            width="390"
            height="215"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="maps"
          ></iframe>
        </div>
      </div>
      <hr />
      <p id="footer-copyright">
        <span style={{ fontWeight: "bold" }}>©2022-2022 Warung</span>
        <span style={{ color: "#FF793F", fontWeight: "bold" }}>Acil</span>. All
        Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
