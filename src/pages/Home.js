import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Viewers from "../component/Viewers";
import Recommendation from "../component/Recommendation";
function Home() {
  const settings = {
    infinite: true,
    speed: 50,
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
  };
  const settings1 = {
    infinite: true,
    speed: 50,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
  };
  return (
    <div className="mt-[50px]">
      <div className=" hidden sm:block">
        <Slider
          {...settings}
          className=" text-3xl text-blue-500 mt-3 w-[95%] mx-auto fnp"
        >
          <a className="ml-3 ">
            <img
              src="../images/slider-badag.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
          <a className="ml-3 cursor-pointer">
            <img
              src="../images/slider-scale.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-red-500 shadow-sm"
            />
          </a>
          <a className="ml-3 ">
            <img
              src="../images/slider-scales.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
          <a className="ml-3 ">
            <img
              src="../images/slider-badging.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
        </Slider>
      </div>
      <div className=" block sm:hidden">
        <Slider
          {...settings1}
          className=" text-3xl text-blue-500 mt-3 w-[95%] mx-auto fnp"
        >
          <a className="ml-3 ">
            <img
              src="../images/slider-badag.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
          <a className="ml-3 cursor-pointer">
            <img
              src="../images/slider-scale.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-red-500 shadow-sm"
            />
          </a>
          <a className="ml-3 ">
            <img
              src="../images/slider-scales.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
          <a className="ml-3 ">
            <img
              src="../images/slider-badging.jpg"
              className="w-[90%] rounded-lg mx-5 h-[280px] shadow-white shadow-lg"
            />
          </a>
        </Slider>
      </div>
      <h1 className="p-5 text-white text-2xl font-bold ">Viewers</h1>
      <Viewers />
      <Recommendation />
    </div>
  );
}

export default Home;
