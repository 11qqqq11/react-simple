import React from "react";
import { MenuList } from "../store/MenuList";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
import { Link } from "react-router-dom";
import { thucDon } from "../store/menuAlacarte";

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Thực Đơn</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          const init = thucDon[key].image;
          return (
            <Link to="/menu/" state={{ from: init }}>
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

