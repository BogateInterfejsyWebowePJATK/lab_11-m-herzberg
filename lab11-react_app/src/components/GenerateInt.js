// ./src/components/GenerateInt.js

import React from "react";

export default function GenerateInt(){
    var x = Math.floor(Math.random() * 400 ) - 200;
    return (<li>{x}</li>);
}