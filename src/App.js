import React, { useEffect } from "react";
import "./App.css";
import { About } from "./components/About/about";
import { ScrollTop } from "./components/Common/Scroll-Top/ScrollTop";
import { Contact } from "./components/Contact/contact";
import { EduSkill } from "./components/EduSkill/EduSkill";
import { Experience } from "./components/Experience/experience";
import { Footer } from "./components/Footer/footer";
import { Homepage } from "./components/Homepage/homepage";
import Navbar from "./components/Navbar/navbar";
import { Preloader } from "./components/Preloader/preloader";
import { Projects } from "./components/Projects/projects";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  useEffect(() => {
    var loader = document.querySelector(".preloader");
    var content = document.querySelector(".App");

    if (loader && content) {
      if (document.readyState === "complete") {
        setTimeout(() => {
          /////----temp timeout ----/////
          loader.classList.add("preloader-hidden");
          content.classList.add("App-visible");
        }, 2000);
      } else {
        window.addEventListener("load", () => {
          setTimeout(() => {
            /////----temp timeout ----/////
            loader.classList.add("preloader-hidden");
            content.classList.add("App-visible");
          }, 2000);
        });
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Preloader />
      <div id="home" className={`App`}>
        <Navbar />
        <Sidebar />
        <Homepage />
        <About />
        <Experience />
        <EduSkill />
        <Projects />
        <Contact />
        <Footer />
        <ScrollTop />
      </div>
    </React.Fragment>
  );
}

export default App;