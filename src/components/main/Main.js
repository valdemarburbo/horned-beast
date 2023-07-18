import React from "react";
import "./Main.css";

import HornedBeast from "../hornedbeast/HornedBeast";

// import data from "../../data.json"; 

export default function Main() {

    return (
        <div className="main-div">
            <HornedBeast title="Goat" imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg" description="A white goat with two little horns. Do not be fooled by its cuteness - it is mischevious at heart." />
            <HornedBeast title="Bull" imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/25/Spanish_Fighting_Bull.jpg" description="A mighty black bull with fearsome horns. Do not wear red if you want to steer clear of its rage." />
        </div>
    )
}

