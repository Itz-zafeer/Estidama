import React from "react";
import NavLink from "./NavLink";
const NavLinks = ({ navItems, scrollToSection }) => {
  return (
    <ul className="listHover text20 text-[#FFFFFF] flex items-center lg:gap-x-[2vw] gap-x-[50px] flex-wrap gap-y-[10px]">
      {navItems.map((navItem, i) => (
        <NavLink
          navItem={navItem?.page}
          key={i}
          scrollToSection={scrollToSection}
        />
      ))}
    </ul>
  );
};

export default NavLinks;
