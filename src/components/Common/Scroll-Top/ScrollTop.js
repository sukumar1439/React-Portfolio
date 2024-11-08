import { useEffect } from "react";
import { GiStrikingSplinter } from "react-icons/gi";
import "./ScrollTop.style.css";

export const ScrollTop = () => {
  useEffect(() => {
    const scroll = document.querySelector(".scrollUp");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scroll.classList.add("scroll-visible");
      } else {
        scroll.classList.remove("scroll-visible");
      }
    });

    scroll.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  return (
    <button id={"scrollUp"} className="scrollUp">
      <GiStrikingSplinter size={"30px"} className="scroll-icon" />
    </button>
  );
};