import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Thực Đơn</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Link to="/menu">
              <MenuItem
            
            key={key}
            image={menuItem.image}
            name={menuItem.name}
          />
        </Link>
            
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
