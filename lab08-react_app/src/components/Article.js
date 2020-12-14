// ./src/components/Footer.js

import React from "react";
import '../css/article.scss';

export default function Article({name, id, sections}){
    return (
        <article id={id} className={"art"}>
            <h2>{name}</h2>
            {sections.map((sec, i) => (
                <section key={sec.id} className={"sec"}>
                    <h3>{sec.name}</h3>
                    <img alt="browser-image" className={"browser-img"} src={process.env.PUBLIC_URL + sec.icon}/>
                    <p>{sec.description}</p>
                </section>
            ))}
        </article>
    )
}