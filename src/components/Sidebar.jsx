import React from "react";
import { useSelector } from "react-redux";
import ShortSideBar from "./ShortSideBar";



const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  console.log(isMenuOpen );
  
  if(!isMenuOpen){
    return null 
  }

  return  (
    <div className="col-span-1 px-2">
      <div className=" pb-6 px-2 border-b-2 border-black ">
        <ul className="space-y-[5px]">
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Home</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Shorts</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">
            Subscription
          </li>
        </ul>
      </div>
      <div className="col-span-1 px-2 border-b-2 border-black pt-3 pb-3">
        <h1 className="font-bold pb-5 text-xl">You</h1>
        <ul className="space-y-0.5">
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Your Channel</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">History</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Playlist</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Your Videos</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Watch Later</li>
          <li className="rounded-xl py-2 px-3 hover:bg-gray-200 ">Liked videos</li>
        </ul>
      </div>
      <div className="col-span-1 px-2 border-b-2 border-black pt-3 pb-3">
        <h1 className="font-bold pb-5 text-xl">Subscriptions</h1>
        <ul className="space-y-0.5">
          <li className="rounded-xl py-2 px-3">Your Channel</li>
          <li className="rounded-xl py-2 px-3">History</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
