import { useEffect } from "react";

const useIntersectObserver = (refClass, animationClass, threshold = 0.5) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove(animationClass);
            entry.target.classList.add("hidden");
          }
        });
      },
      { threshold }
    );

    const hiddenElement = document.querySelectorAll(`.${refClass}`);
    hiddenElement.forEach((el) => observer.observe(el));
  }, [refClass, animationClass, threshold]);
};

export default useIntersectObserver;