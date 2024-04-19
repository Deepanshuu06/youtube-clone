import React, { useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateLongRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);

  console.log(chatmessages);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api called");
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: generateLongRandomMessage(),
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    

    <div className="w-96 border-2 border-black overflow-scroll max-h-[32.5rem] ml-10 flex-col-reverse flex">
      <div className="pl-2 flex flex-col-reverse">
        {chatmessages.map((c) => ( // Reverse the order of messages
          <LiveChatMessage username={c.name} message={c.message} />
          ))}
      </div>
    </div>
          </>
  );
};

export default LiveChat;
