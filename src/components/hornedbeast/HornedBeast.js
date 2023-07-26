import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({title, imageUrl, description, handleModal, beastObject}) {
    const [fav, setfav] = useState(0);

    function handleFav() {
        setfav(fav + 1);
    }

    return (
        <div className="beast-div">
            <div className="h2-div"><h2>{title}</h2></div>
            <img src={imageUrl} alt={title} title={title} onClick={() => handleModal(beastObject)}/>
                <div className="p-div">
                    <p>{description}</p>
                    <p>
                        <span className="heart" onClick={handleFav} >
                            ❤️
                        </span>
                        <span className="counter">{fav}</span>
                    </p>
                </div>
        </div>
    )
}