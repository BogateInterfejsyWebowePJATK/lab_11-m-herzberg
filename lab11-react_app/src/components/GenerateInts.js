// ./src/components/GenerateInts.js

import React from "react";
import GenerateInt from "./GenerateInt";

export default function GenerateInts({amount}){
    var numbers = [];
    for(var x = 0; x < amount; x++){
        numbers[x] = GenerateInt();
    }
    return (<ul>{numbers}</ul>)
}