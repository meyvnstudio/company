import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollHeight(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "3px",
        height: `${scrollHeight}%`,
        background: "rgb(251, 159, 137)",
        zIndex: 999999,
        transition: "height 1s linear",
      }}
    />
  );
};

export default ScrollProgress;
