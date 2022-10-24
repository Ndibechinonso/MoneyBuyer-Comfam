import ChatActions from "../../../common/components/Messages/ChatActions";
import ChatBody from "../../../common/components/Messages/ChatBody";
import { useAppSelector } from "../../../common/components/redux/hooks";

function Messages() {
  const {selectMessage} = useAppSelector((state) => state.messages)

  return (
    <>
  {selectMessage ? <><ChatBody /> 
   <ChatActions /> </> : <div className="no_selected_msg">Select a seller to chat</div>}
    </> 
  );
}

export default Messages;
