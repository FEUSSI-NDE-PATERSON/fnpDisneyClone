import React, { useState } from "react";
import Links from "./Links";
import "./navbar.css";
import { auth, provider, app } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "@mui/material";
import { Search, ThreeDRotation } from "@mui/icons-material";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex justify-between sm:justify-between items-center overflow-x-hidden  sm:flex  md:p-3 text-white h-[fit]  bg-[#040714]  shadow-2xl">
      <Link to="/home">
        <img src="../images/logo.svg" className="h-16 w-16" />
      </Link>
      <div className="flex bg-transparent items-center p-2  my-2 rounded-lg shadow-xl shadow-gray-400 w-[250px] sm:w-[500px]">
        <input
          type="search"
          className="bg-transparent w-[90%] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={search && `/search/:${search}`}>
          <Search />
        </Link>
      </div>
      <div className=" flex items-center ">
        <div
          className={` w-[100%] transition-all duration-500 ease-out  sm:mt-2 h-[fit] sm:ml-2  ${
            open ? "hidden" : "visible"
          } md:flex `}
        >
          <Links toggleDrawer={toggleDrawer} open={open} />
        </div>
        <div className="flex">
          {open ? (
            <p
              className={`transition-all duration-500 ease-in  font-extrabold cursor-pointer   ${
                open ? " text-xl" : "rotate-0 text-2xl"
              }`}
              onClick={toggleDrawer(true)}
            >
              X
            </p>
          ) : (
            <p
              className={` rotate-90 transition-all duration-500 ease-in  font-extrabold cursor-pointer   ${
                open ? "rotate-60  text-xl" : "rotate-0 text-2xl"
              }`}
              onClick={toggleDrawer(true)}
            >
              |||
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
