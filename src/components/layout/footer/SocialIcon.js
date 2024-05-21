import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ socialIcon }) => {
  return (
    <li>
      <Link
        target="_blank"
        href={socialIcon?.social_link}
        className="block relative  lg:w-[1.25vw] lg:h-[1.25vw] sm:w-[22px] sm:h-[22px] w-[20px] h-[20px]"
      >
        <Image
          fill
          src={socialIcon?.social_icon?.permalink}
          alt={"social Handle"}
          className=""
        />
      </Link>
    </li>
  );
};

export default SocialIcon;
