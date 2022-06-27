import React from "react";

function MessageInput({ messageInputHandler }) {

  return(
    <textarea name="textarea" id="textarea" cols="25" rows="10" maxLength={300} onChange={(e) => messageInputHandler(e)}></textarea>
  )
}

export default MessageInput;