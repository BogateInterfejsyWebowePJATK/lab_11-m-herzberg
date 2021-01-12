// ./src/components/GenerateInts.js

import React, {useState} from "react";
import GenerateInt from "./GenerateInt";

function deleteElement(map, i = 0){
   if(i == 0) return map;
   else {
       map.pop();
       return map;
   }
}

export default function GenerateInts({nums, onRefresh = f => f}){
const [numbers,getNums] = useState(deleteElement(nums));

    return (
        <section>
        <ul className={"numbers"}>
            {
                numbers.map((num,i) =>(
                <GenerateInt
                    key={i}
                    val={num}
                    onDelete={() => {deleteElement(numbers)}}
                />
                )
            )
            }
        </ul>
        <button onClick={onRefresh}>Nowe liczby</button>
        </section>
            )
}