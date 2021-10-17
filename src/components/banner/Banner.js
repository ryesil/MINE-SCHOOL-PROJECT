import React from "react";
import Children from "../pics/children.PNG";
import Ribbon from "../pics/ribbon.PNG";
import School from "../pics/school.PNG";
import Carousel from "react-bootstrap/Carousel";
import classes from "./banner.module.css";

const items = [
  {
    pic: Children,
    id: 0,
  },
  {
    pic: Ribbon,
    id: 1,
  },
  {
    pic: School,
    id: 2,
  },
];

const Banner = (props) => {
  return (
    <div>
      <img src={items[props.index].pic} alt="" className={classes.pics} />
    </div>
  );
};

export default Banner;
