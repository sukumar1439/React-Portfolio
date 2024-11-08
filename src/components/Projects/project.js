import "./projects.style.css";

import React from "react";
import b2 from "../../assests/images/Blog-Space (1).png";
import b3 from "../../assests/images/Blog-Space (3).png";
import b1 from "../../assests/images/Blog-Space.png";
import bootstrap from "../../assests/images/bootstrap.png";
import css from "../../assests/images/css.png";
import js from "../../assests/images/js.png";
import mui from "../../assests/images/mui.png";
import next from "../../assests/images/nextjs.png";
import postgresql from "../../assests/images/postgresql.svg";
import prisma from "../../assests/images/prisma.png";
import redux from "../../assests/images/redux.png";
import router from "../../assests/images/router.svg";
import tailwind from "../../assests/images/tailwind.svg";
import ts from "../../assests/images/ts.png";

import reanimated from "../../assests/images/reanimated.svg";

import bite1 from "../../assests/images/bitecircle-1.png";
import bite2 from "../../assests/images/bitecircle-2.png";
import bite3 from "../../assests/images/bitecircle-3.png";
import p1 from "../../assests/images/plantopia-1.png";
import p2 from "../../assests/images/plantopia-2.png";
import p3 from "../../assests/images/plantopia-3.png";
import pf1 from "../../assests/images/portfolio-1.png";
import pf2 from "../../assests/images/portfolio-2.png";
import react from "../../assests/images/react.png";
import reactflow from "../../assests/images/reactflow.png";
import rf1 from "../../assests/images/rf1.png";
import rf2 from "../../assests/images/rf2.png";
import rnav from "../../assests/images/rnav.svg";
import rnp from "../../assests/images/rnp.svg";
import swiper from "../../assests/images/swiper-logo.svg";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { Customcarousel } from "../Common/Custom-carousel/customcarousel";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";

export const Projects = () => {
  useIntersectObserver("context-div", "h-animate");
  useIntersectObserver("img-div", "v-animate");

  const projects = [
    {
      title: "Blog Space",
      text: "A dynamic blogging platform for exploring diverse blogs and effortlessly create, edit, and manage posts with the TinyMCE rich-text editor.",
      imgs: [b3, b1, b2],
      url: data.projects_url.blogSpace,
      tools: [
        { skill: "React JS", icon: react },
        { skill: "Tailwind CSS", icon: tailwind },
        { skill: "Javascript", icon: js },
        { skill: "React Router DOM", icon: router },
        { skill: "Redux Toolkit", icon: redux },
      ],
    },
    {
      title: "Plantopia",
      text: "A digital e-commerce for plants, with a dynamic backend powered by Prisma ORM and PostgreSQL, built on Next.js with customized MaterialUI theming.",
      imgs: [p1, p2, p3],
      url: data.projects_url.plantopia,
      tools: [
        { skill: "Next JS", icon: next },
        { skill: "React JS", icon: react },
        { skill: "Material UI", icon: mui },
        { skill: "Prisma ORM", icon: prisma },
        { skill: "Postgresql", icon: postgresql },
        { skill: "Swiper.js", icon: swiper },
      ],
    },
    {
      title: "BiteCircle",
      text: "A go-to social Mobile platform for all things food-related. Built with 𝗥𝗲𝗮𝗰𝘁 𝗡𝗮𝘁𝗶𝘃𝗲, 𝗧𝘆𝗽𝗲𝗦𝗰𝗿𝗶𝗽𝘁, and a suite of sophisticated libraries and packages.",
      imgs: [bite3, bite1, bite2],
      url: data.projects_url.biteCircle,
      tools: [
        { skill: "React Native", icon: react },
        { skill: "Typescript", icon: ts },
        { skill: "React Native Paper", icon: rnp },
        { skill: "Reanimated3", icon: reanimated },
        { skill: "React Navigation", icon: rnav },
      ],
    },
    {
      title: "Chatbot Flow Builder",
      text: "A simple React-Flow template which allows users to create chatbot flows by connecting multiple messages together to determine the order of execution.",
      imgs: [rf1, rf2],
      url: data.projects_url.ReactFlowTemplate,
      tools: [
        { skill: "React Flow", icon: reactflow },
        { skill: "Bootstrap", icon: bootstrap },
        { skill: "React JS", icon: react },
        { skill: "Javascript", icon: js },
      ],
    },
    {
      title: "Portfolio",
      text: "Purely React v18 & CSS Portfolio - No Frameworks, No Packages, Just Clean JavaScript Mastery! Including this Custom Carousel.",
      imgs: [pf1, pf2],
      url: data.projects_url.portfolio,
      tools: [
        { skill: "React JS", icon: react },
        { skill: "CSS", icon: css },
        { skill: "Javascript", icon: js },
      ],
    },
  ];
  return (
    <MainContainer id="my-projects" className="flex-div">
      <h1 className="ask mb auto-m" children={"Latest Projects."} />
      <Customcarousel array={projects} indicator={"bullet"}>
        {projects.map((each, idx) => {
          return (
            <div key={idx} style={{ display: "inline-flex" }}>
              <section className="grid-section space">
                <div className="flex-div context-div">
                  <h2 className="project-title" children={each.title} />
                  <h3 className="institution" children={each.text} />
                  <div className="tool-div">
                    {each?.tools.map((tool, id) => {
                      return (
                        <div key={id} className="project-context">
                          <img src={tool.icon} alt={tool.skill} />
                        </div>
                      );
                    })}
                  </div>
                  {each?.url && (
                    <Button
                      redirectURL={each?.url}
                      children={
                        each?.title === "BiteCircle"
                          ? "Download App"
                          : "Visit Site"
                      }
                      target="_blank"
                    />
                  )}
                </div>
                <div className="img-div">
                  <Customcarousel array={each.imgs}>
                    {each.imgs?.map((img, idx) => {
                      return (
                        <div
                          key={idx}
                          style={{
                            display: "inline-flex",
                          }}
                        >
                          <img
                            src={img}
                            alt={`${img}_ss`}
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      );
                    })}
                  </Customcarousel>
                </div>
              </section>
            </div>
          );
        })}
      </Customcarousel>
    </MainContainer>
  );
};