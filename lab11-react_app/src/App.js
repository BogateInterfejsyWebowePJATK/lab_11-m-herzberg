import './App.css';
import React from "react";
import GenerateInts from "./components/GenerateInts";


function App() {
  return[
    <React.Fragment>
      <ul>
        <GenerateInts amount={10}></GenerateInts>
      </ul>
    </React.Fragment>
  ];
}

export default App;

