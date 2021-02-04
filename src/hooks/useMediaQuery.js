const breakpoints = [480, 608, 1024, 1504];
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const useMediaQuery = () => {
  const { width } = useWindowSize();
  const isXl = width >= breakpoints[4];
  const isLg = width < breakpoints[4] && width >= breakpoints[3];
  const isMd = width < breakpoints[3] && width >= breakpoints[2];
  const isSM = width < breakpoints[1];
  return { isXl, isLg, isMd, isSM };
};

export default useMediaQuery;
