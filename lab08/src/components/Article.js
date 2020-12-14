// ./src/components/Footer.js

import React from "react";
import "../css/style.css";

export default function Article({name, id, sections}){
    return (
        <article id={id}>
            <h2>{name}</h2>
            {sections.map((sec, i) => (
                <section key={sec.id}>
                    <h3>{sec.name}</h3>
                    <img className={"browser-img"} src={sec.icon}/>
                    <p>{sec.description}</p>
                </section>
            ))}
        </article>
    )
}