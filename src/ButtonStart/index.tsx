import React, { FC } from 'react'
import Button from "@mui/material/Button";

interface Data{
    click:()=>void,
    name:string
}
const ButtonStart= (props:Data) => {
  return (
    <Button
    variant="contained"
    className="button"
    style={{ margin: "0px 10px" }}
    onClick={props.click}
    >
    {props.name}
    </Button>
  )
}

export default ButtonStart
