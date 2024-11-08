import React from "react";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import "./experience.style.css";

export const Experience = () => {
  useIntersectObserver("exp-detail", "v-animate");

  return (
    <MainContainer id="resume" className="flex-div">
      <h1 className="ask mb auto-m" children={"Experience."} />
      {(data.experience ? [...data.experience].reverse() : []).map(
        (list, index) => {
          return (
            <section key={list.id} className="exp-detail">
              <div className="company">
                <h1 className="position" children={list.position} />
                <p className="" children={list.duration} />
                <div children={list.status} className="status" />
                {data.experience.length - 1 !== index && (
                  <div className="stepper" />
                )}
              </div>
              <div className="company">
                <h1 className="position" children={list.companyName} />
                <p className="exp-para" children={list.workInfo} />
              </div>
            </section>
          );
        }
      )}
    </MainContainer>
  );
};