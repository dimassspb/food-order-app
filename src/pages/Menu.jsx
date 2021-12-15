import React from "react";
import { MenuList } from "../data/data";
import MenuItem from "../components/MenuItem"
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              image={menuItem.image}
              price={menuItem.price}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
