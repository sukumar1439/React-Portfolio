import React, { useState } from "react";
import { BiErrorCircle, BiLoaderCircle } from "react-icons/bi";
import { BsMailbox2Flag } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { GrSend } from "react-icons/gr";
import {
  IoCheckmarkDoneCircleOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import data from "../../content/data.json";
import useIntersectObserver from "../../hooks/useIntersectObserver";
import { MainContainer } from "../Common/Main-container/MainContainer";
import { Button } from "../Shared/Button/button";
import "./contact.style.css";

const URL = process.env.REACT_APP_SCRIPT_URL;

export const Contact = () => {
  useIntersectObserver("contact-details", "h-animate");
  useIntersectObserver("contact-form", "h-animate");

  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    setLoader(true);
    fetch(URL, { method: "Post", body: formData })
      .then((res) => res.json())
      .then((data) => {
        if (data === "") {
          setSuccess(false);
          setSubmitted(true);
          return;
        }
        setSuccess(true);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log({ error });
        setSuccess(false);
        setSubmitted(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const contacts = [
    {
      id: 1,
      icon: <BsMailbox2Flag size={"25px"} />,
      info: data.bio.address2,
    },
    {
      id: 2,
      icon: <IoMailOpenOutline size={"25px"} />,
      info: data.bio.mail,
    },
    {
      id: 3,
      icon: <CiMobile3 size={"25px"} />,
      info: data.bio.mob,
    },
  ];

  return (
    <MainContainer id="contact-me" className="flex-div" noBorder={true}>
      <h1
        className="connect auto-m"
        children="Let's connect & share our stories."
      />
      <h1 className="ask mb auto-m touch" children={"Get in touch!"} />

      <section className="contact-section">
        <div className="contact-details">
          <p className="auto-m tag">
            Open to freelancing opportunities for the right project. Feel free
            to reach out and start a conversation.
          </p>
          {contacts.map((list) => {
            return (
              <div className="contact-info" key={list.id}>
                <div className="outline" children={list.icon} />
                <p children={list.info} className="contact-para" />
              </div>
            );
          })}
        </div>
        <div className="contact-form">
          <h1 children={"What's on your Mind?"} />
          <form id="form-data" onSubmit={(e) => submit(e)}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              autoComplete="off"
              disabled={submitted}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              disabled={submitted}
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              autoComplete="off"
              disabled={submitted}
            />
            <textarea
              rows={4}
              type="text"
              id="comment"
              name="comment"
              maxLength={300}
              placeholder="Type Comment"
              required
              autoComplete="off"
              disabled={submitted}
            />
            {!submitted ? (
              <Button
                type="submit"
                children={
                  loader ? "Sharing Thoughts..." : "Share Your Thoughts"
                }
                icon={
                  loader ? <BiLoaderCircle className="loader" /> : <GrSend />
                }
                disabled={loader}
              />
            ) : (
              <p className="auto-m tag">
                <span
                  children={
                    success ? (
                      <IoCheckmarkDoneCircleOutline
                        size={"30px"}
                        color="green"
                      />
                    ) : (
                      <BiErrorCircle size={"30px"} color="red" />
                    )
                  }
                />
                {success
                  ? "Your thoughts are in! Appreciate your time. I'll circle back shortly!"
                  : " Oops! Server's acting funky. Give it another shot later. In meantime, Ping me on socials if needed!"}
              </p>
            )}
          </form>
        </div>
      </section>
    </MainContainer>
  );
};