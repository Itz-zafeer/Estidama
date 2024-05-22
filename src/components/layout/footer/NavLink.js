import Link from "next/link";
import React from "react";

const NavLink = ({ navItem, scrollToSection }) => {
  return (
    <li>
      <span
        onClick={() =>
          scrollToSection(navItem?.permalink.replace("#", "") + "Section")
        }
        className="block cursor-pointer"
      >
        {navItem?.title}
      </span>
    </li>
  );
};

export default NavLink;
