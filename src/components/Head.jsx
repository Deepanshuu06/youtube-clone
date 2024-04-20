import React, { useEffect, useState } from "react";
import {
  SEARCH_SUGGESTION_API,
  hamburgerIcon,
  micIcon,
  searchIcon,
  userIcon,
  youtubeLogo,
} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import store from "../utils/store";
import searchSlice, { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchInputFocus, setSearchInputFocus] = useState(false);
  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestions(searchCache[searchText]);
      } else {
        fetchSearchSuggestion();
      }

    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  
  const fetchSearchSuggestion = async () => {
    const response = await fetch(SEARCH_SUGGESTION_API + searchText);
    const json = await response.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );

  };

  return (
    <div className="grid grid-flow-col px-5 py-4 m-2  shadow-lg relative">
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
          placeholder={`search`}
          value={searchText}
          onChange={handleSearchText}
          onFocus={() => setSearchInputFocus(true)}
          onBlur={() => setSearchInputFocus(false)}
        />
        {searchText.length ? (
          <button
            onClick={() => {
              setSearchText("");
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        ) : null}

        <button className="px-4 py-2 rounded-e-3xl border-emerald-600 border-2 bg-gray-200">
          <img className="h-6" src={searchIcon} alt="" />
        </button>
        <button className="ml-5">
          <img src={micIcon} alt="mic" className="w- h-8" />
        </button>
        {searchSuggestions.length > 0 && searchInputFocus && (
          <div className="bg-gray-100 w-[60%] absolute top-full mt-2 z-10">
            {searchSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex p-2 font-bold items-center justify-between cursor-pointer hover:bg-gray-300"
              >
                <div className="flex ">
                  <img className="h-6 pr-5" src={searchIcon} alt="" />{" "}
                  {suggestion}
                </div>
                <button className="pr-6">remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <img src={userIcon} alt="user icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Head;
