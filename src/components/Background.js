import React, { Component } from "react";
import Slider from "react-slick";
import b1 from "../images/bg03.jpg";
import b2 from "../images/bg02.jpg";
import b3 from "../images/bg04.jpg";
import b4 from "../images/bg05.jpg";
import "../styles/Background.css";
import { Link } from "react-router-dom";
export default class Background extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <div className="headerContainer">
          <h1> Hưng Phú Tửu </h1>
          <p> Khai trương 26/04</p>
          <Link to="/Contact">
            <button>Đặt chỗ</button>
          </Link>
        </div>

        <Slider {...settings}>
          <div>
            <img className="bg" alt="bg1" src={b1} />
          </div>
          <div>
            <img className="bg" alt="bg2" src={b2} />
          </div>
          <div>
            <img className="bg" alt="bg3" src={b3} />
          </div>
          <div>
            <img className="bg" alt="bg4" src={b4} />
          </div>
        </Slider>
      </div>
    );
  }
}