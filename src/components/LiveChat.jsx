import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateLongRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  const [livemessage, setlivemessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: generateLongRandomMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="w-96 border-2 border-black overflow-scroll scroll-smooth min-h-[28.5rem] max-h-[28.5rem] ml-10 flex-col-reverse flex">
          <div className="pl-2 flex flex-col-reverse">
            {chatmessages.map(
              (
                c // Reverse the order of messages
              ) => (
                <LiveChatMessage username={c.name} message={c.message} />
              )
            )}
          </div>
        </div>
        <form
          action="submit"
          className="ml-10 mt-4 gap-5 flex justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            if(livemessage.length > 0){
              dispatch(
                addmessage({
                  name: "deepanshu",
                  message: livemessage,
                })
              );
              setlivemessage("");

            }
            
          }}
        >
          <input
            type="text"
            placeholder="enter your message"
            className="px-4 py-2 w-72 border-2 border-black "
            value={livemessage}
            onChange={(e) => setlivemessage(e.target.value)}
          />
          <button className="border-2 px-5 bg-black text-white py-3 cursor-pointer">
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
