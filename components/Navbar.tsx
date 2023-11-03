import React from "react";
import datas from "@/data/data.json";

type NavbarProps = {
  activeMenu: string;
};

const Navbar = ({ activeMenu }: NavbarProps) => {
  console.log(activeMenu);
  if (activeMenu === "home") {
    activeMenu = "";
  }
  return (
    <ul className="lg:flex items-center justify-center gap-20  sm:hidden">
      {datas.menu.map((menu, index) => {
        const isActive = menu.code.toLowerCase() === activeMenu;
        return (
          <li
            key={index}
            className={`menu-container flex items-center justify-center flex-col gap-2 ${
              isActive ? "active" : ""
            }`}
          >
            <a href={menu.URL}>
              <span className="menu-name px-2 ">{menu.name}</span>
            </a>
            <div className="text-[#333] yakuhanjp text-[8px]">
              {menu.japanese}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
