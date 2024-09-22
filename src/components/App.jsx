import React, { useState } from "react";

import WelcomePage from "./WelcomePage";

import NavBar from "./navBar";

import Body from "./Body";


import '../../public/styles.css'

function App() {
  return (
   <div>
        <NavBar/>
        <WelcomePage/>
        <Body />
    </div>
  );
}

export default App;
