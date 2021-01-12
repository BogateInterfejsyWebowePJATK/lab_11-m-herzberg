// ./src/components/GenerateInts.js

import React from "react";
import GenerateInt from "./GenerateInt";

export default function GenerateInts({nums, onRefresh = f => f}){


    return (
        <section>
        <ul className={"numbers"}>
            {
                nums.map((num,i) =>(

                <GenerateInt
                    key={i}
                    val={num}
                />
                )
            )
            }
        </ul>
        <button onClick={onRefresh}>Nowe liczby</button>
        </section>
            )
}