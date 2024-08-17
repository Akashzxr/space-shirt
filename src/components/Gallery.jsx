import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Gallery() {
  return (
    <div className="flex w-full justify-between mt-minus-218 mb-14 px-5 flex-col gap-14 sm:px-24 sm:mt-0 sm:flex-row sm:gap-0 sm:h-33">
      <div className="h-full">
        <div className="w-full h-1/2 font-Cannon text-4xl leading-relaxed sm:leading-loose sm:h-1/2">
          OUR NEWEST <br /> PRODUCTS
        </div>
        <div className="w-full h-1/2">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute mt-4 left-10 sm:left-28">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <img className="h-full w-full rounded-3xl" src="/cap-img.jpg" alt="" />
          <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus left-40 sm:left-60">
            CAP
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute  left-9 mt-4 sm:left-l-35">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <img className="h-full rounded-3xl" src="/sweatshirt.jpg" alt="" />
        <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus left-40 sm:left-l-48">
          SWEAT SHIRT
        </div>
      </div>

      <div>
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute left-9 mt-4 sm:left-l-67" >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <img className="rounded-3xl h-big" src="/totebag-im.jpg" alt="" />
        <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus left-40 sm:left-l-78">
          TOTE BAG
        </div>
      </div>
    </div>
  );
}
