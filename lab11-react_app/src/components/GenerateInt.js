// ./src/components/GenerateInt.js

import React, {useState} from "react";
function valueMode(val,option){
    let value = val;
    switch(option){
        case 1:
            value = val.val.toString(2);
            return value;
        break;
        case 2:
            var hex = '0x' + (val.val+0x10000).toString(16).substr(-4).toUpperCase();
            value = hex;
            return value;
        break;
        case 3:
            var y = val.val.toString(8);
            value = y;
            return value;
        break;
        default: {
            value = val;
            return value;
        }
    }
}
export default function GenerateInt({val}, onDelete = f => f){
    const [value, showValue] = useState(valueMode(val,4));
    return (
        <li>{value}
            <button onClick={() => {showValue(valueMode({val},1))}}>BIN</button>
            <button onClick={() => {showValue(valueMode({val},2))}}>HEX</button>
            <button onClick={() => {showValue(valueMode({val},3))}}>OCT</button>
            <button onClick={onDelete}>X</button>
        </li>
    );
}