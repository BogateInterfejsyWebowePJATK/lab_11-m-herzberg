// ./src/components/Navigation.js

import React from "react";

export default function Navigation({name,navlist}){
    return (
        <nav className="navbar">
            <p>{name}</p>
            <ul>
            {navlist.map((n,i)=> (
                <li key={i}>{n.name}</li>
            ))}
            </ul>
        </nav>
    )
}