import React from "react";
import classes from "./Header.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuIcon from "@mui/icons-material/Menu";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SchoolIcon from "./SchoolIcon";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
const Header = () => {
  return (
    <Typography variant="h5">
      <ul className={classes.navbar}>
        <li>
          <MenuIcon />
        </li>
        <li className={classes.whiteSpace}></li>
        <li>
          <button>
            <SchoolIcon />
          </button>
        </li>
        <li>Academics</li>
        <li>Activities</li>
        <li>District</li>
        <li>Schools</li>
        <li className={classes.icon}>
          <button className={classes.bosluksuz}>
            <BorderColorIcon />
            <p>Enroll</p>
          </button>
        </li>
        <li className={classes.whiteSpace}></li>
        <li className={classes.icon}>
          <AnnouncementIcon />
          <p>News</p>
        </li>
        <li className={classes.whiteSpace}></li>
        <li className={classes.icon}>
          <AddReactionIcon />
          <p>My SSO</p>
        </li>
        <li className={classes.whiteSpace}></li>
        <li className={classes.icon}>
          <ShortcutIcon />
          <p>ShortCuts</p>
        </li>
        <li className={classes.whiteSpace}></li>
        <li className={classes.icon}>
          <PhoneInTalkIcon />
          <p>Lets talk</p>
        </li>

        <li className={classes.whiteSpace}></li>
        <li className={classes.icon}>
          <SearchIcon />
          <p>Lets talk</p>
        </li>
      </ul>
    </Typography>
  );
};

export default Header;
