import Button from "@restart/ui/esm/Button";
import React from "react";
import classes from "./Buttons.module.css";
const Buttons = (props) => {
  return (
    <ul className={classes.buttons}>
      <li>
        <Button onClick={props.onClick0} className={classes.button}>
          Button1
        </Button>
      </li>
      <li>
        <Button onClick={props.onClick1} className={classes.button}>
          Button1
        </Button>
      </li>
      <li>
        <Button onClick={props.onClick2} className={classes.button}>
          Button1
        </Button>
      </li>
    </ul>
  );
};

export default Buttons;
