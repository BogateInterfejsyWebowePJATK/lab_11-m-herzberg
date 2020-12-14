// ./src/index.js

import React from "react";
import {render} from "react-dom";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Footer from "./components/Footer";
import navlist from "./data/navlist.json";
import browsers from "./data/browsers.json";

function main()
{
    //object style

    return[
        <React.Fragment>
            <Navigation navlist={navlist} name="Navigation bar"/>
            <Article id={"browser-article"} name={"Popular web browsers"} sections={browsers}/>
            <Footer/>
        </React.Fragment>
    ];
}

render(main(), document.getElementById("root"));