import React, { useEffect, useState } from "react";
import PaperclipIcon from "../CustomIcons/PaperclipIcon";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { sendNewChat } from "../redux/messages/messagesAsyncThunk";

const initialForm = {
  message_id: "",
  message: "",
};

const ChatActions = () => {
const disptach = useAppDispatch()

  const { activeMessage } = useAppSelector((state) => state.messages);
  const [messageId, setMessageId] = useState<string>("");

  const [values, setValues] = useState(initialForm);


  useEffect(() => {
    const activeSeller = activeMessage[0]?._id;
    setMessageId(activeSeller);
  }, [activeMessage]);

  useEffect(() => {
    setValues((values) => ({ ...values, message_id: messageId }));
  }, [messageId]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (values.message === "") return;
    disptach(sendNewChat({values}))
    setValues((values) => ({ ...values, message: "" }));

  };

  return (
    <div className="chatactions">
      {/* <form className="uploadform" >
        <label>
          <input type="file" name="" id=" " />
          <PaperclipIcon />
        </label>
      </form> */}
      <form className="chatform" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter your text message..."
            name="message"
            value={values.message}
            onChange={changeHandler}
          />
        </label>
        <button type="submit" className="disabled_btn" disabled={messageId === undefined || values.message?.length === 0}>Send</button>
      </form>
    </div>
  );
}

export default ChatActions;
