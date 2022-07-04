import React from "react";
import PaperclipIcon from "../customIcons/PaperclipIcon";

type Props = {};

function ChatActions({}: Props) {
  return (
    <div className="chatactions">
      <form className="uploadform" >
        <label>
          <input type="file" name="" id=" " />
          <PaperclipIcon />
        </label>
      </form>
      <form className="chatform" >
        <label >
          <input type="text" placeholder="Enter your text message..." />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatActions;
