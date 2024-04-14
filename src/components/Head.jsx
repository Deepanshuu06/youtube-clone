import React, { useState } from "react";
import {
  hamburgerIcon,
  micIcon,
  searchIcon,
  userIcon,
  youtubeLogo,
} from "../constants";

const Head = () => {
  const [SearchText, SetSearchText] = useState("");

  const handleSearchText = (e) => {
    SetSearchText(e.target.value);
  };
  console.log(SearchText);

  return (
    <div className="grid grid-flow-col px-5 py-4  m-2 shadow-lg">
      <div className="flex col-span-3 items-center">
        <img src={hamburgerIcon} alt="menu" className="w-8 h-10 mr-8" />
        <img src={youtubeLogo} alt="youtube" className="w-fit h-8" />
      </div>
      <div className="flex col-span-8 text-center items-center ">
        <input
          type="text"
          className=" rounded-s-3xl px-4 py-2 border-emerald-600 border-2 w-[60%]"
          placeholder="Search"
          value={SearchText}
          onChange={handleSearchText}
        />
        <button className="px-4 py-2 rounded-e-3xl border-emerald-600 border-2 bg-gray-400">
          <img className="h-6" src={searchIcon} alt="" />
        </button>
       <button className="ml-5"> <img src={micIcon} alt="mic" className="w- h-8" /></button>
      </div>
      <div className="col-span-1 flex">

        <img src={userIcon} alt="user icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Head;