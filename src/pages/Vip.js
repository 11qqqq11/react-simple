import React, { Component } from "react";
import Slider from "react-slick";
import v1 from "../images/vip1.jpg";
import v2 from "../images/vip2.jpg";
import v3 from "../images/vip3.jpg";
import v4 from "../images/vip4.jpg";
import "../styles/Vip.css";
export default class Vip extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="vipcontainer">
        <div className="vipdes">
        <h1> Phòng Vip</h1>
        <p>Võ Đang - Nga Mi - Côn Luân - Hoa Sơn</p>
        <p>Bàn dài 8-12 Khách </p> 
        <p>Diện tích 16m2 (thích hợp cho buổi tiếp khách hàng và đối tác).</p>
        <p>Có WC, máy lạnh trong phòng</p>
        </div>

        <Slider {...settings}>
          <div>
            <img className="vbg" alt="bg1" src={v1}/>
            <div className="headerContainer">
        
      </div>
          </div>
          <div>
          <img className="vbg" alt="bg2" src={v2}/>
          </div>
          <div>
          <img className="vbg" alt="bg3" src={v3}/>
          </div>
          <div>
          <img className="vbg" alt="bg4" src={v4}/>
          </div>
        </Slider>
      </div>
    );
  }
}