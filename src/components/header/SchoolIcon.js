import { Typography } from "@mui/material";
import React from "react";
import KayakingIcon from "@mui/icons-material/Kayaking";
import classes from "./SchoolIcon.module.css";
function SchoolIcon() {
  return (
    <div className={classes.ship}>
      <div>
        <KayakingIcon className={classes.kayak} />
      </div>
      <div>
        <Typography>MINNETONKA </Typography>{" "}
        <Typography> PUBLIC SCHOOL</Typography>
      </div>
    </div>
  );
}

export default SchoolIcon;
