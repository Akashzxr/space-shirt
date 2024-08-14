import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Gallery() {
  return (
    <div className="flex w-full px-24 h-33 justify-between mb-14">
      <div className="h-full">
        <div className="w-full h-1/2 font-Cannon text-4xl leading-loose">
          OUR NEWEST <br /> PRODUCT
        </div>
        <div className="w-full h-1/2">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute left-28 mt-4">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <img className="h-full rounded-3xl" src="/cap-img.jpg" alt="" />
          <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus left-60">
            CAP
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute left-28 mt-4" style={{left:"35rem"}}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <img className="h-full rounded-3xl" src="/sweatshirt.jpg" alt="" />
        <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus" style={{left:"48rem"}}>
          SWEAT SHIRT
        </div>
      </div>

      <div>
      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center absolute left-28 mt-4" style={{left:"67rem"}}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <img className="rounded-3xl h-big" src="/totebag-im.jpg" alt="" />
        <div className="font-Cannon w-40 h-12 bg-white rounded-2xl flex justify-center items-center absolute mt-minus" style={{left:"78rem"}}>
          TOTE BAG
        </div>
      </div>
    </div>
  );
}
