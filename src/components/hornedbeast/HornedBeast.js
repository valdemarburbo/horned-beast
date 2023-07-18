import React from "react";
import "./HornedBeast.css";

export default function HornedBeast({title, imageUrl, description}) {
    return (
        <div className="beast-div">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} title={title}/>
            <p>{description}</p>
        </div>
    )
}