import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limitedTechnologies = isSmallScreen ? technologies.slice(0, 7) : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {limitedTechnologies.map(({ name, icon }) => (
        <div className="w-28 h-28" key={name}>
          {/* ✅ Use img for small screens to improve performance */}
          {isSmallScreen ? (
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          ) : (
            <BallCanvas icon={icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
