import Link from "next/link";
import React from "react";
export function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}
const NavLink = ({ navItem, scrollToSection }) => {
  return (
    <li>
      {isValidUrl(navItem?.permalink) ? (
        <a
          target="_blank"
          href={navItem?.permalink}
          className="block cursor-pointer"
        >
          {navItem?.title}
        </a>
      ) : (
        <span
          onClick={() =>
            scrollToSection(navItem?.permalink.replace("#", "") + "Section")
          }
          className="block cursor-pointer"
        >
          {navItem?.title}
        </span>
      )}
    </li>
  );
};

export default NavLink;
