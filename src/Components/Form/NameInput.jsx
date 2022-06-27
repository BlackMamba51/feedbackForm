import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function NameInput({ nameInputHandler }) {

  return (
    <MyInput onChange={(e) => nameInputHandler(e)} type="text" placeholder="Your name and surname"/>
  )
}

export default NameInput;