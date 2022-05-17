import React from "react";
import "../styles/Footer.css";
import Map from "./Map";

function Footer() {
  return (
    <div className="footer">
      <div className="container">

        <Map />
        <div className="f-a">
          <h1>Hưng Phú Tửu</h1>
          <p>18 tổ 48 khu vực 7, P.Hưng Phú, Q. Cái Răng, TP. Cần Thơ</p>
          <p>Hotline: 02923737818</p>
          <p>Email: trantai1531@gmail.com</p>
        </div>
      </div>

    </div>
  );
}

export default Footer;
