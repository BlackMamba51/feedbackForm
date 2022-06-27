import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function DateInput({ dateInputHandler }) {

  return(
    <MyInput type="date" placeholder="Your birthday" onChange={(e) => dateInputHandler(e)}/>
  )
}

export default DateInput;