import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function DateInput({ dateInputHandler, dateInput }) {

  return(
    <MyInput value={dateInput} type="date" placeholder="Your birthday" onChange={(e) => dateInputHandler(e)}/>
  )
}

export default DateInput;