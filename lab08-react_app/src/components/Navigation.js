// ./src/components/Navigation.js

import React from "react";
import '../css/navigation.scss';

export default function Navigation({name,navlist}){
    return (
        <nav className="navbar">
            <ul>
            {navlist.map((n,i)=> (
                <li key={i}>{n.name}</li>
            ))}
            </ul>
        </nav>
    )
}