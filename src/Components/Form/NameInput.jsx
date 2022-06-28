import React from "react";
import MyInput from "../UI/Inputs/MyInput";

function NameInput({ nameInputHandler, nameInput }) {

  return (
    <MyInput value={nameInput} onChange={(e) => nameInputHandler(e)} type="text" placeholder="Ivan Ivanov"/>
  )
}

export default NameInput;