import React from "react";
import { GrLocation } from "react-icons/gr";
import { LiaBirthdayCakeSolid, LiaIdCard, LiaMedapps } from "react-icons/lia";
import { PiDevicesLight, PiTelevisionSimpleBold } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { SocialIcons } from "../../components/Shared/Reused-Icons/Icons";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Card } from "../Shared/Card/card";
import "./about.style.css";

export const About = () => {
  useIntersectObserver("details", "h-animate");
  useIntersectObserver("content", "v-animate");
  useIntersectObserver("abt-div", "h-animate");
  const about = [
    {
      id: 1,
      icon: <PiDevicesLight size={"2.8rem"} />,
      title: data.about.title1,
      info: data.about.info1,
    },
    {
      id: 2,
      icon: <LiaMedapps size={"2.8rem"} />,
      title: data.about.title2,
      info: data.about.info2,
    },
    {
      id: 3,
      icon: <PiTelevisionSimpleBold size={"2.8rem"} />,
      title: data.about.title3,
      info: data.about.info3,
    },
  ];

  const personalInfo = [
    {
      id: 1,
      icon: <LiaIdCard size={"24px"} />,
      tag: "Full Name : ",
      details: data.bio.name,
    },
    {
      id: 2,
      icon: <LiaBirthdayCakeSolid size={"24px"} />,
      tag: "How Old? : ",
      details: data.bio.age,
    },
    {
      id: 3,
      icon: <TbDeviceLandlinePhone size={"24px"} />,
      tag: "Telephone : ",
      details: data.bio.mob,
    },
    {
      id: 4,
      icon: <GrLocation size={"24px"} />,
      tag: "Location : ",
      details: data.bio.address1,
    },
    {
      id: 5,
      icon: <GrLocation size={"24px"} />,
      tag: "Interests : ",
      details: data.bio.hobby,
    },
  ];

  return (
    <MainContainer id="about">
      <div className="flex-div m-b">
        <h1 className="ask mb auto-m" children={"About Me"} />
        <section className="bio-container">
          <div className="info-div">
            <ul>
              {personalInfo.map((data) => (
                <li className="intro details" key={data.id}>
                  <span children={data.icon} />
                  <span children={data.tag} />
                  {Array.isArray(data.details) ? (
                    <div>
                      {data.details?.map((list, idx) => (
                        <span key={idx} children={list} className="last-span" />
                      ))}
                    </div>
                  ) : (
                    <span children={data.details} className="last-span" />
                  )}
                </li>
              ))}
            </ul>
            <div className="social-div">
              {SocialIcons.map((icon) => (
                <a
                  className="social-icon"
                  key={icon.id}
                  href={icon.href}
                  rel="noreferrer"
                  target="_blank"
                  children={icon.icon}
                />
              ))}
            </div>
          </div>
          <div className="content-div">
            <p className="content intro mb" children={data.bio.intro1} />
            <p className="content intro" children={data.bio.intro2} />
          </div>
        </section>
      </div>

      <div className="flex-div">
        <h1 className="ask mb auto-m" children={"What I do?"} />
        <section className="about-container">
          {about.map((data, index) => {
            return (
              <div
                key={data.id}
                className="abt-div "
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Card icon={data.icon} title={data.title} info={data.info} />
              </div>
            );
          })}
        </section>
      </div>
    </MainContainer>
  );
};