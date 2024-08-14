import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function HeroCard({ image, width,name }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      id="herocard"
      className="h-96 transition-transform duration-700 w-80 rounded-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 flex flex-col justify-center items-center"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      style={hidden?null:{transform:"translate(0rem,-5rem)"}}
    >
      {hidden ? null : 
        <div
          id="herocardicon"
          className="rounded-full w-20 h-20 items-center flex justify-center bg-yellow-600 absolute"
          style={{ bottom: "21rem", zIndex: "100" }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      }
      
      <img className="" src={image} alt="" style={{ width: width }} />

      {hidden ? null : 
        <div
          id="herocardtext"
          className="font-Cannon w-36 h-12 bg-white rounded-2xl flex justify-center items-center absolute"
          style={{ top: "22.5rem" }}
        >
          {name}
        </div>
      }
    </div>
  );
}
