import React from "react";
import SocialIcon from "./SocialIcon";
const SocialIcons = ({ socialIconsData }) => {
  return (
    <ul className="listHover flex lg:gap-x-[1.25vw] gap-x-[20px] items-center mt32">
      {socialIconsData?.map((socialIcon, i) => (
        <SocialIcon socialIcon={socialIcon} key={i} />
      ))}
    </ul>
  );
};

export default SocialIcons;
