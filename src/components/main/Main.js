import React from "react";
import "./Main.css";

import HornedBeast from "../hornedbeast/HornedBeast";

let beastArray = [{
    "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
}]


export default function Main() {

    for (i = 0; i < beastArray.length; i++) {
        return (
            <div className="main-div">
                <HornedBeast title="Goat" imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg" description="A white goat with two little horns. Do not be fooled by its cuteness - it is mischevious at heart." />
            </div>
        )
    }
    
    return (
        <div className="main-div">
            <HornedBeast title="Goat" imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg" description="A white goat with two little horns. Do not be fooled by its cuteness - it is mischevious at heart." />
            <HornedBeast title="Bull" imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/25/Spanish_Fighting_Bull.jpg" description="A mighty black bull with fearsome horns. Do not wear red if you want to steer clear of its rage." />
        </div>
    )
}