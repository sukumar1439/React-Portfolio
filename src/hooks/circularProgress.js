import { useEffect } from "react";

export const useCircularProgress = (array) => {
  useEffect(() => {
    let flexdiv = document.querySelectorAll(".flip-container");

    flexdiv.forEach((div, index) => {
      let start = 0;
      let end = parseInt(array[index].value);
      let progress = setInterval(() => {
        start++;
        div.style.background = `conic-gradient(var(--text-preset-5) ${
          start * 3.6
        }deg, transparent 0deg)`;

        if (start === end) {
          clearInterval(progress);
        }
      }, 20);
    });
  }, [array]);
};