import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="projects"
      className="AboutBody grid grid-cols-2 gap-8 py-12 px-20 h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-black"
    >
     <div className=" bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
        <div>
        <h3>
        TOURNAMENT MANAGEMENT SYSTEM
        </h3>
        <br />
        <p>
          Created using C++ with oops
        </p>
        </div>
        
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
      <div>
        <h3>
        HOSPITAL DATA MANAGEMENT SYSTEM
        </h3>
        <br />
        <p>
          Developed with Red-Black Trees in c++
        </p>
        </div>
        
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
      <div>
        <h3>
        Music Server
        </h3>
        <br />
        <p>
          Developed with Python
        </p>
        </div>
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-amber-400 cursor-pointer">
      <div>
        <h3>
        Vehicle Booking System
        </h3>
        <br />
        <p>
          Developed with HTML,CSS,JS,PHP
        </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
