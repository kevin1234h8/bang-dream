import React from "react";
import datas from "@/data/data.json";

type NavbarProps = {
  activeMenu: string;
};

const Navbar = ({ activeMenu }: NavbarProps) => {
  return (
    <ul className="lg:flex items-center justify-center gap-20  sm:hidden">
      {datas.menu.map((menu, index) => {
        const isActive = menu.name.toLowerCase() === activeMenu;
        return (
          <li
            key={index}
            className={`menu-container flex items-center justify-center flex-col gap-2 ${
              isActive ? "active" : ""
            }`}
          >
            <a href={menu.name.toLowerCase()}>
              <span className="menu-name px-2 ">{menu.name}</span>
            </a>
            <div className="text-[#333] text-[8px]">{menu.japanese}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
