import Link from "next/link";
import React from "react";

const NavLink = ({ navItem }) => {
  return (
    <li>
      <Link href={navItem?.permalink} className="block">
        {navItem?.title}
      </Link>
    </li>
  );
};

export default NavLink;
