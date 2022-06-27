import React, { useState } from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PhoneInput from "./PhoneInput";
import DateInput from "./DateInput";
import MessageInput from "./MessageInput";


function Form() {
  const [rightName, setRightName] = useState(true);
  const [rightEmail, setRightEmail] = useState(true); //  
  const [rightPhone, setRightPhone] = useState(true);
  const [rightDate, setRightDate] = useState(true);
  const [rightMessage, setRightMessage] = useState(true);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [countOfChar, setCountOfChar] = useState('0');

  function nameInputHandler(e) {
    e.target.value = e.target.value.toUpperCase();
    setNameInput(e.target.value);
  }

 
  function emailInputHandler(e) {
    setEmailInput(e.target.value);
  }

  function phoneInputHandler(e) {
    setPhoneInput(e.target.value);
  }
  
  function dateInputHandler(e) {
    setDateInput(e.target.value);
  }

  function messageInputHandler(e) {
    setCountOfChar(e.target.value.split('').length);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(nameInput);
    const regName = /[A-Za-z]+( [A-Za-z])/;
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const regPhone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
    const regDate= /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;
    nameInput.split(' ').slice(nameInput.split(' ')[0], nameInput.length - 1).map((word) => {
      console.log(!regName.test(nameInput));
      console.log(word.length < 3);
      if((!regName.test(nameInput) || word.length < 3 || word.length > 30)) {
        setRightName(false);
      } else {
        setRightName(true);
      }
    })
    if(regEmail.test(emailInput) === false) {
      setRightEmail(false);
    } else {
      setRightEmail(true);
    }
    if(regPhone.test(phoneInput) === false) {
      setRightPhone(false);
    } else {
      setRightPhone(true);
    }
    if(regDate.test(dateInput)) {
      setDateInput(false);
    } else {
      setDateInput(true);
    }
    if(countOfChar < 10) {
      setRightMessage(false);
    } else {
      setRightMessage(true)
    }
  }

  return(
    <form id="form1" action="#" className="form">
      <NameInput nameInputHandler={nameInputHandler}/>
      {!rightName
      ? <div style={{ color: 'red' }}>Name must be correct</div>
      : false
      }
      <EmailInput emailInputHandler={emailInputHandler}/>
      {!rightEmail
      ? <div style={{ color: 'red' }}>Email must be correct</div>
      : false
      }
      <PhoneInput phoneInputHandler={phoneInputHandler}/>
      {!rightPhone
      ? <div style={{ color: 'red' }}>Phone must be correct</div>
      : false
      }
      <DateInput dateInputHandler={dateInputHandler}/>
      {!rightDate
      ? <div style={{ color: 'red' }}>Date must be correct</div>
      : false
      }
      <MessageInput messageInputHandler={messageInputHandler}/>
      {!rightMessage
      ? <div style={{ color: 'red' }}>Min length is 10</div>
      : false
      }
      <div>{countOfChar} / 300</div>
      <button className="sumbit-button" onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  )
}

export default Form;