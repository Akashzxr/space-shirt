import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <>
      <div className="px-20 flex gap-64">
        <div className="first-container">
          <div className="flex gap-7 items-center">
            <p className="text-gray-500 font-poppins text-xl">EST 2002</p>
            <div className="w-44 h-0.5 bg-gray-500"></div>
          </div>
          <div className="hero-text font-Herokid font-extrabold">
            <h1 className="text-main-green text-9xl">SPACE</h1>
            <h1 className="text-9xl">SHIRT</h1>
          </div>
          <p className="mt-4 font-poppins text-gray-500">
            COMFORTABLE PRODUCTS CREATED BY HIGHLY SKILLED <br />
            CRAFTMANSHIP IN EACH OF OUR PRODUCTS
          </p>
          <div className="flex gap-6 mt-6 ">
            <button className="w-40 bg-yellow-400 h-12 rounded-3xl font-Roboto-txt text-sm font-bold">
              BEST SELLERS
            </button>
            <button className="rounded-3xl w-24 font-bold font-Roboto-txt text-sm border-solid border-black border ">
              SALE
            </button>
          </div>
        </div>

        <div className="second-container grid grid-cols-2 grid-rows-3 mt-9 gap-x-20">
          <div className="w-64 h-72 text-slate-800 row-start-1 row-end-3 font-Cannon font-bold text-3xl justify-self-center leading-loose">
            CHECK IN <br />
            OUR NEW
            <br />
            COLLECTION
            <br />
            FOR SPORT &<br />
            ACTIVITY
            <br />
          </div>

          <div className=" h-50 row-start-3 flex gap-6 items-center">
            <div className="flex flex-col gap-5">
              <div className="star flex gap-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              </div>
              <h4 className="font-Cannon text-slate-800 text-2xl ">
                500 <FontAwesomeIcon icon={faPlus} className="text-lg"/>
              </h4>
            </div>

            <div className="font-Cannon font-thin text-slate-700">
              5-STAR<br/>
              CUSTOMER<br/>
              REVIEW<br/>
            </div>
          </div>

          <div className=" h-36 justify-self-start content-center">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          </div>
          <div className="row-start-2 row-end-4 col-start-2 justify-self-end content-center">
            <img className="w-60 rounded-3xl" src="/moon-shirt-hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
