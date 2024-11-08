import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { ImSun } from "react-icons/im";
import { IoMdPaper } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiLightbulbLight, PiPhoneOutgoing } from "react-icons/pi";
import { SiBlueprint } from "react-icons/si";
import { useTheme } from "../../contexts/themeContext";
import { Tooltip } from "../Shared/Tooltip/tooltip";
import "./sidebar.style.css";

const IconSection = () => {
  const { toggleTheme } = useTheme();

  const abc = () => {
    let current = document.getElementById("toggle-theme");

    current.addEventListener("change", (event) => {
      if (event.target.checked) {
        toggleTheme("light");
      } else {
        toggleTheme("dark");
      }
    });
  };

  const icons = [
    {
      id: 1,
      icon: <IoHomeOutline className={`sbar-icon`} size={"25px"} />,
      text: "Home",
      href: "#home",
    },
    {
      id: 2,
      icon: <GoPerson className={`sbar-icon`} size={"25px"} />,
      text: "About",
      href: "#about",
    },
    {
      id: 3,
      icon: <IoMdPaper className={`sbar-icon`} size={"25px"} />,
      text: "Resume",
      href: "#resume",
    },
    {
      id: 4,
      icon: <PiLightbulbLight className={`sbar-icon`} size={"25px"} />,
      text: "Skills",
      href: "#education-skills",
    },
    {
      id: 5,
      icon: <SiBlueprint className={`sbar-icon`} size={"25px"} />,
      text: "Projects",
      href: "#my-projects",
    },
    {
      id: 6,
      icon: <PiPhoneOutgoing className={`sbar-icon`} size={"25px"} />,
      text: "Contact",
      href: "#contact-me",
    },
  ];
  return (
    <>
      <div className="sbar-icon-div">
        {icons.map((item) => {
          return (
            <div key={item.id}>
              <Tooltip children={item.icon} text={item.text} href={item.href} />
            </div>
          );
        })}
      </div>

      <input id="toggle-theme" type="checkbox" />
      <label htmlFor="toggle-theme" className="toggle-btn" onClick={abc}>
        <ImSun size={"1rem"} />
        <BsMoonStarsFill size={"1rem"} />
      </label>
    </>
  );
};

const Sidebar = () => {
  const click = () => {
    document.querySelector(".sbar-small").classList.toggle("open");
    document.querySelector(".opener").classList.toggle("open");
  };

  return (
    <>
      <span className="logo-small" children={"Sh."} />
      <div className={`sbar-body`}>
        <div className="logo-img">
          <h1>
            Dev.
            <span children={"Sh."} />
          </h1>
        </div>
        <IconSection />
      </div>
      <div className="sbar-small">
        <div className="opener" onClick={click} />
        <IconSection />
      </div>
    </>
  );
};

export default Sidebar;