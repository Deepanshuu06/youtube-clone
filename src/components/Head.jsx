import React, { useEffect, useState } from "react";
import {
  SEARCH_SUGGESTION_API,
  hamburgerIcon,
  micIcon,
  searchIcon,
  userIcon,
  youtubeLogo,
} from "../constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    fetchSearchSuggestion();
  }, [searchText]);

  const fetchSearchSuggestion = async () => {
    const response = await fetch(SEARCH_SUGGESTION_API + searchText);
    const json = await response.json();
    setSearchSuggestions(json[1]);
  };

  return (
    <div className="sticky top-0 bg-white z-100">
      <div className="grid grid-flow-col px-5 py-4 m-2 shadow-lg relative">
        <div className="flex col-span-3 items-center">
          <img
            src={hamburgerIcon}
            alt="menu"
            className="w-8 h-10 mr-8 cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
          <img
            src={youtubeLogo}
            alt="youtube"
            className="w-fit h-8 cursor-pointer"
          />
        </div>
        <div className="flex col-span-8 text-center items-center relative">
          <input
            type="text"
            className="rounded-s-3xl px-4 py-2 border-emerald-600 border-2 w-[60%]"
            placeholder="Search"
            value={searchText}
            onChange={handleSearchText}
          />
          <button className="px-4 py-2 rounded-e-3xl border-emerald-600 border-2 bg-gray-200">
            <img className="h-6" src={searchIcon} alt="" />
          </button>
          <button className="ml-5">
            <img src={micIcon} alt="mic" className="w- h-8" />
          </button>
          {searchSuggestions.length > 0 && (
            <div className="bg-gray-100 w-[60%] absolute top-full mt-2 z-10">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex p-2 font-bold items-center justify-between"
                >
                  <div className="flex ">
                    <img
                      className="h-6 pr-5"
                      src={searchIcon}
                      alt=""
                    />{" "}
                    {suggestion}
                  </div>
                  <button className="text-blue-800">remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1 flex">
          <img src={userIcon} alt="user icon" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Head;
