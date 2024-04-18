import React from "react";
import { useSelector } from "react-redux";
import ShortSideBar from "./ShortSideBar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="min-w-64">
      <div className=" pb-6 px-2 border-b-2 border-black ">
        <ul className="space-y-[5px]">
          <Link to={"/"}>
            <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex">
              <span className="mr-2 material-symbols-outlined">home</span>Home
            </li>
          </Link>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex ">
            <span className="material-symbols-outlined mr-2">library_books</span>
            Shorts
          </li>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex ">
            <span className="material-symbols-outlined mr-2">subscriptions</span>
            Subscription
          </li>
        </ul>
      </div>
      <div className="col-span-1 px-2 border-b-2 border-black pt-3 pb-3">
        <h1 className="font-bold pb-5 text-xl">You</h1>
        <ul className="space-y-0.5">
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex">
            <span className="material-symbols-outlined mr-2">account_circle</span>
            Your Channel
          </li>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex">
            <span className=" mr-2 material-symbols-outlined">history</span> History
          </li>

          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex ">
            <span className="material-symbols-outlined mr-2">playlist_play</span>
            Playlist
          </li>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex">
            <span className="material-symbols-outlined mr-2">animated_images</span>
            Your Videos
          </li>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex ">
            <span className="material-symbols-outlined mr-2">schedule</span>
            Watch Later
          </li>
          <li className="rounded-xl py-3 px-3 cursor-pointer hover:bg-gray-200 flex">
            <span className="material-symbols-outlined mr-2">thumb_up</span>
            Liked videos
          </li>
        </ul>
      </div>
      <div className="col-span-1 px-2 border-b-2 border-black pt-3 pb-3">
        <h1 className="font-bold pb-5 text-xl">Subscriptions</h1>
        <ul className="space-y-0.5">
          <li className="rounded-xl py-2 px-3 cursor-pointer">Your Channel</li>
          <li className="rounded-xl py-2 px-3 cursor-pointer">History</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
