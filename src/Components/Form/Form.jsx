import React, { useState } from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PhoneInput from "./PhoneInput";
import DateInput from "./DateInput";
import MessageInput from "./MessageInput";
import PostService, { responseStatus } from "../API/api";



function Form() {
  let errorsArray = [];

  const [isLoading, setIsLoading] = useState(false);

  const regName = /^([A-Za-z]+)+([A-Za-z])$/;
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const regPhone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
  const regDate= /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/;

  const [rightName, setRightName] = useState(true);
  const [rightEmail, setRightEmail] = useState(true); //  
  const [rightPhone, setRightPhone] = useState(true);
  const [rightDate, setRightDate] = useState(true);
  const [rightMessage, setRightMessage] = useState(true);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [countOfChar, setCountOfChar] = useState('0');

  function nameInputHandler(e) {
    e.target.value = e.target.value.toUpperCase();
    setNameInput(e.target.value);
    nameInput.split(' ').slice(nameInput.split(' ')[0], nameInput.length - 1).map((word) => {
      if((!regName.test(word) || word.length < 3 || word.length > 30)) {
        setRightName(false);
      } else {
        setRightName(true);
      }
    })
  }

 
  function emailInputHandler(e) {
    setEmailInput(e.target.value);
    if(regEmail.test(emailInput) === false) {
      setRightEmail(false);
    } else {
      setRightEmail(true);
    }
  }

  function phoneInputHandler(e) {
    setPhoneInput(e.target.value);
    if(regPhone.test(phoneInput) === false) {
      setRightPhone(false);
    } else {
      setRightPhone(true);
    }
  }
  
  function dateInputHandler(e) {
    setDateInput(e.target.value);
    if(regDate.test(dateInput)) {
      setRightDate(false);
    } else {
      setRightDate(true);
    }
  }

  function messageInputHandler(e) {
    setCountOfChar(e.target.value.split('').length);
    setMessageInput(e.target.value);
    if(countOfChar < 10) {
      setRightMessage(false);
    } else {
      setRightMessage(true)
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    errorsArray.length = 0;
    nameInput.split(' ').slice(nameInput.split(' ')[0], nameInput.length - 1).map((word) => {
      if((!regName.test(word) || word.length < 3 || word.length > 30)) {
        setRightName(false);
        errorsArray.push('Name must be consist of 2 words, each word min 3 char and max 30 char;');
      } else {
        setRightName(true);
      }
    })
    if(regEmail.test(emailInput) === false) {
      setRightEmail(false);
      errorsArray.push('Email must be like that example123@mail.ru;');
    } else {
      setRightEmail(true);
    }
    if(regPhone.test(phoneInput) === false) {
      setRightPhone(false);
      errorsArray.push('Phone must be like that +7(123)345-67-89;');
    } else {
      setRightPhone(true);
    }
    if(regDate.test(dateInput)) {
      setRightDate(false);
      errorsArray.push('Date mustnt be empty');
    } else {
      setRightDate(true);
    }
    if(countOfChar < 10) {
      setRightMessage(false);
      errorsArray.push('Message can have min 10 char and max 300 char;');
    } else {
      setRightMessage(true)
    }
    const feedbackData = {
      name: nameInput, 
      email: emailInput, 
      phone: phoneInput, 
      date: dateInput, 
      message: messageInput
    }
    if(errorsArray.length === 0) {
      setIsLoading(true);
      await PostService.postData(feedbackData);
      setIsLoading(false);
      responseStatus.status = 'success';
      responseStatus.message = 'form has been succesfully submitted';
      JSON.stringify(responseStatus);
      setNameInput('');
      setEmailInput('');
      setPhoneInput('');
      setDateInput('');
      setMessageInput('');
      setCountOfChar(0);
    } else {
      responseStatus.status = 'error';
      responseStatus.message = errorsArray;
      JSON.stringify(responseStatus);
      
    }
  }

  return(
    <form id="form1" action="#" className="form">
      <NameInput nameInput={nameInput} nameInputHandler={nameInputHandler}/>
      {!rightName
      ? <div style={{ color: 'red' }}>Name must be correct</div>
      : false
      }
      <EmailInput emailInput={emailInput} emailInputHandler={emailInputHandler}/>
      {!rightEmail
      ? <div style={{ color: 'red' }}>Email must be correct</div>
      : false
      }
      <PhoneInput phoneInput={phoneInput} phoneInputHandler={phoneInputHandler}/>
      {!rightPhone
      ? <div style={{ color: 'red' }}>Phone must be correct</div>
      : false
      }
      <DateInput dateInput={dateInput} dateInputHandler={dateInputHandler}/>
      {!rightDate
      ? <div style={{ color: 'red' }}>Date must be correct</div>
      : false
      }
      <MessageInput messageInput={messageInput} messageInputHandler={messageInputHandler}/>
      {!rightMessage
      ? <div style={{ color: 'red' }}>Min length is 10</div>
      : false
      }
      <div>{countOfChar} / 300</div>
      <button disabled={isLoading} className="sumbit-button" onClick={(e) => submitHandler(e)}>Submit</button>
      <div style={{ color: 'red' }} className="status-message">{responseStatus.status} <br/> {responseStatus.message}</div>
    </form>
  )
}

export default Form;