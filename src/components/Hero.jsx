import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <>
      <div className="flex flex-col p-5 gap-28 sm:px-20 sm:flex-row sm:gap-64 ">
        <div className="first-container">
          <div className="flex gap-4 items-center sm:gap-7">
            <p className="text-gray-500 font-poppins text-l sm:text-xl">EST 2002</p>
            <div className="w-20 h-0.5 bg-gray-500 sm:w-44"></div>
          </div>
          <div className="hero-text font-Herokid font-extrabold mt-1 text-6xl sm:text-9xl">
            <h1 className="text-main-green ">SPACE</h1>
            <h1>SHIRT</h1>
          </div>
          <p className="mt-4 font-poppins text-gray-500 text-xs sm:text-xl">
            COMFORTABLE PRODUCTS CREATED BY HIGHLY SKILLED <br/>
            CRAFTMANSHIP IN EACH OF OUR PRODUCTS
          </p>
          <div className="flex gap-6 mt-6 ">
            <button className="w-40 bg-yellow-600 h-12 rounded-3xl font-Roboto-txt text-sm font-bold">
              BEST SELLERS
            </button>
            <button className="rounded-3xl w-24 font-bold font-Roboto-txt text-sm border-solid border-black border ">
              SALE
            </button>
          </div>
        </div>

        <div className="second-container grid grid-cols-2 grid-rows-3 gap-x-20 sm:mt-9">
          <div className="h-72 text-xl text-slate-800 row-start-1 row-end-3 font-Cannon font-bold justify-self-center leading-loose sm:leading-loose sm:text-3xl sm:w-64 ">
            CHECK IN <br />
            OUR NEW
            <br />
            COLLECTION
            <br />
            FOR SPORT &<br />
            ACTIVITY
            <br />
          </div>

          <div className="h-50 row-start-3 flex gap-6 items-start sm:items-center">
            <div className="flex flex-col gap-5">
              <div className="star flex gap-1 text-xs sm:text-base">
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              </div>
              <h4 className="font-Cannon text-slate-800 text-lg  sm:text-2xl">
                500 <FontAwesomeIcon icon={faPlus} className="sm:text-lg"/>
              </h4>
            </div>

            <div className="font-Cannon font-thin text-slate-700 text-xs sm:text-base">
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
