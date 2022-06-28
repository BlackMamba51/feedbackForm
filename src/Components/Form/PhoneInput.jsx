import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function PhoneInput({ phoneInputHandler, phoneInput }) {

  return(
    <div className="phone-section">
      <div className="phone-example">+7(123)345-67-89</div>
      <MyInput value={phoneInput} onChange={(e) => phoneInputHandler(e)} type="tel" placeholder="+7(123)345-67-89"/>
    </div>
  )
}

export default PhoneInput;