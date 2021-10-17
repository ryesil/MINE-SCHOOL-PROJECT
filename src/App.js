import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Buttons from "./components/UI/Buttons";
function App() {
  const [index, setIndex] = useState(0);
  const looper = useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index) => {
        return (index + 1) % 3;
      });
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const indexHandler0 = () => {
    setIndex(0);
  };
  const indexHandler1 = () => {
    setIndex(1);
  };
  const indexHandler2 = () => {
    setIndex(2);
  };
  return (
    <Fragment>
      <Header />
      <Banner index={index} />
      <Buttons
        onClick0={indexHandler0}
        onClick1={indexHandler1}
        onClick2={indexHandler2}
      />
    </Fragment>
  );
}

export default App;
