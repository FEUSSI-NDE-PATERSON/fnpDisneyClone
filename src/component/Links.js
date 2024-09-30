import React from "react";
import Linked from "./Linked";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Add,
  CropOriginal,
  Home,
  MovieSharp,
  PlaylistAdd,
  Search,
} from "@mui/icons-material";

function Links({ open, toggleDrawer }) {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <div className="h-screen p-4 flex flex-col gap-5 bg-[#2A2E3F]">
        <Linked iconName="HOME" Icon={<Home color="black" />} />
        <Linked iconName="WATCHLIST" Icon={<Add color="black" />} />
        <Linked iconName="ORIGINALS" Icon={<CropOriginal color="black" />} />
        <Linked iconName="SERIES" Icon={<PlaylistAdd color="black" />} />
        <Linked iconName="MOVIES" Icon={<MovieSharp color="black" />} />
      </div>
    </Drawer>
  );
}

export default Links;
