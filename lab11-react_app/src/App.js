import './App.css';
import React, {useState} from "react";
import GenerateInts from "./components/GenerateInts";


function generateNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++)
        numbers.push(Math.floor(Math.random() * 400) - 200);
    return numbers;
}
function App() {
    const [numbers, setNumbers] = useState(generateNumbers());


  return(
    <React.Fragment>
        <GenerateInts nums={numbers} onRefresh={() => { setNumbers(generateNumbers());}}></GenerateInts>
    </React.Fragment>
  );
}

export default App;

