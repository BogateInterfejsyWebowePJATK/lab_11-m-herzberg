import './App.css';
import React from "react";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Footer from "./components/Footer";
import navlist from "./data/navlist.json";
import {data} from "./data/browsers.js";


function App() {
  return[
    <React.Fragment>
      <Navigation navlist={navlist} />
      <Article id={"browser-article"} name={"Popular web browsers"} sections={data}/>
      <Footer/>
    </React.Fragment>
  ];
}

export default App;

