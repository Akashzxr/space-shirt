import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function HeroCard({ image, width,name }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      id="herocard"
      className="w-36 h-56 transition-transform duration-700 rounded-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex flex-col justify-center items-center sm:w-80 sm:h-96"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      style={hidden?null:{transform:"translate(0rem,-5rem)"}}
    >
      {hidden ? null : 
        <div
          id="herocardicon"
          className="rounded-full w-14 h-14   items-center flex justify-center bg-yellow-600 absolute bottom-48 sm:bottom-b-21 sm:w-20 sm:h-20 "
          style={{ zIndex: "100" }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      }
      
      <img className="" src={image} alt="" style={{ width: width }} />

      {hidden ? null : 
        <div
          id="herocardtext"
          className="font-Cannon w-24 h-10 bg-white rounded-2xl text-xs flex justify-center items-center absolute top-52 sm:top-t-22.5 sm:text-lg sm:h-12 sm:w-36"
        >
          {name}
        </div>
      }
    </div>
  );
}
