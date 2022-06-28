import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function EmailInput({ emailInputHandler, emailInput }) {

  return(
    <MyInput value={emailInput} id="email" type="text" placeholder="example123@mail.ru" onChange={(e) => emailInputHandler(e)}/>
  )
}

export default EmailInput;