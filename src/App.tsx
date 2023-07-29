import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import ButtonStart from "./ButtonStart";
import Time from "./Time";

function App() {
  const [milsecond, setmilsecond] = useState<number>(0);
  const [second, setsecond] = useState<number>(0);
  const [minut, setminut] = useState<number>(0);
  const [tf, settf] = useState<boolean>(false);
  const [hr, sethr] = useState<number>(0);
  

  useEffect(() => {
    let interval: any;
    if (tf) {
      interval = setInterval(() => {
        if (milsecond === 60) {
          setmilsecond(0);
          setsecond(second + 1);
        } else {
          setmilsecond(milsecond + 1);
        }
        if (second === 60) {
          setsecond(0);
          setminut(minut + 1);
        }
        if (minut === 60) {
          setminut(0);
          sethr(hr + 1);
        }
      }, 1);
    }
    return () => clearInterval(interval);
  }, [milsecond, tf]);

  const cliclhenler = (e: boolean | string) => {
    if (e === true) {
      settf(true);
    } else if (e === false) {
      settf(false);
    } else if (e === "remove") {
      setmilsecond(0);
      setminut(0);
      setsecond(0);
      settf(false);
    }
  };

  return (
    <div className="backgroundcolor">
      <div className="box">
        <h1 style={{ textAlign: "center",margin:'10px 0px'}} className="text-white">
          countdown timer
        </h1>
        <div className="center">
          <div className="box2">
            <center style={{ display: "flex", justifyContent: "center" }}>
              <Time time={hr} name={"hours"}/>
              <Time time={minut} name={"minut"}/>
              <Time time={second} name={"second"}/>
              <Time time={milsecond} name={"millisecond"}/>
            </center>
          </div>
        </div>
        <div style={{ marginTop: "240px" }}>
          <center>
            <ButtonStart click={() => cliclhenler(true)}  name={"START"} />
            <ButtonStart click={() => cliclhenler(false)} name={"PAUSE"}/>
            <ButtonStart click={() => cliclhenler("remove")} name={"REMOVE"}/>
          </center>
        </div>
      </div>
    </div>
  );
}

export default App;
