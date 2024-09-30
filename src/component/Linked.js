import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
function Linked({ iconName, IconImage, Icon }) {
  const link = iconName.toLowerCase();
  return (
    <Link
      to={link}
      className="flex items-center   shadow-lg sm:shadow-none shadow-white bg-gray-400 p-3"
    >
      {Icon}
      <p className="fnp ml-2 text-white font-bold text-sm  hover:text-red-500">
        {iconName}
      </p>
    </Link>
  );
}

export default Linked;
