import React from "react";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Order Now!</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return <MenuItem key={key} image={menuItem.image} name={menuItem.name} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
