import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function PhoneInput({ phoneInputHandler }) {

  return(
    <div className="phone-section">
      <div className="phone-example">+7(123)345-67-89</div>
      <MyInput onChange={(e) => phoneInputHandler(e)} type="tel" placeholder="Your phone number"/>
    </div>
  )
}

export default PhoneInput;