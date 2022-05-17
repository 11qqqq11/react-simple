import React, {useState} from "react";
import Logo from "../images/ico.PNG";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import mbt from "../images/mbt.png"

function Navbar({ toggle }) {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className="leftSide" >
      <Link to="/"><img src={Logo} alt="logo" /></Link>
      </div>
      <div className="rightSide">
      <ul>
        <li><Link to="/">TRANG CHỦ</Link></li>
        <li className="hi" onClick={toggleClass}>CHI TIẾT THỰC ĐƠN

          <ul className={isActive ? 'show': 'hide'} 
       >
						  <li><Link to={'/menu'}> Alacarte </Link> </li>
						  <li><Link to={'/menutiec'}> Menu Tiệc </Link> </li>
              <li><Link to={'/menudoan'}> Khách Đoàn </Link> </li>
					  </ul>

        </li>
        <li><Link to="/event">SỰ KIỆN</Link></li>
        <li><Link to="/vip">PHÒNG VIP</Link></li>
        <li><Link to="/tuyendung">TUYỂN DỤNG</Link></li>
        <li><Link to="/contact">LIÊN HỆ</Link></li>
        <li className="lii"><img alt="mbt" src={mbt} onClick={toggle}/></li>
      
        
        
        
        
        
      </ul>

      </div>
    </div>
  );
}
export default Navbar;
