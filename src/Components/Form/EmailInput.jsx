import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function EmailInput({ emailInputHandler }) {

  return(
    <MyInput id="email" type="text" placeholder="Your email" onChange={(e) => emailInputHandler(e)}/>
  )
}

export default EmailInput;