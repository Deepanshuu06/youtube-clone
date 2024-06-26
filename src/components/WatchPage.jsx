import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY } from "../constants";
import Comments from "./Comments";
import { userIcon } from "../constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const [CommentsList, setCommentsList] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
    fetchComments();
  }, [dispatch]);

  const fetchComments = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${searchParams.get(
        "v"
      )}&key=${GOOGLE_API_KEY}`
    );
    const json = await response.json();
    setCommentsList(json.items);
  };

  return (
    <div className="px-10 py-6 ">
      <div className=" flex w-full">
        <iframe
          width="900"
          height="520"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>



        

        <LiveChat />
      </div>

      <div className="mt-10 w-[56.5rem]">
        <div>
          <div className="flex text-2xl gap-24 py-4">
            <h2>Total Comments</h2>
            <h4>sort</h4>
          </div>
          <div className="flex gap-5 py-10">
            <img src={userIcon} alt="user icon" className="w-10 h-10" />
            <input
              className="w-full outline-none border-b-2 border-black"
              placeholder="Add Comments"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div>
          {CommentsList.map((comment, index) => (
            <Comments key={index} Comments={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
