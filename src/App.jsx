import React from "react";
import { youtubeLogo } from "./constants";

import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    
      <Provider store={store}>
        <div>
        <Head />
        <Body />

        </div>
    
      </Provider>

    /*
    head
    body
     sidebar
        menulinks
     mainContainer
      buttons list 
      video Container   
          video card


    */
  );
}

export default App;
