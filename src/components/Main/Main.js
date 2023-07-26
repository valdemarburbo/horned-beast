import React from "react";
import "./Main.css";

import HornedBeast from "../hornedbeast/HornedBeast";

// import data from "../../data.json"; 

export default function Main({beastData, handleModal}) {

    return (
        <main className="main-div">
            {/* {<HornedBeast title="Goat" imageUrl="https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg" description="A white goat with two little horns. Do not be fooled by its cuteness - it is mischevious at heart." />
            <HornedBeast title="Bull" imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/25/Spanish_Fighting_Bull.jpg" description="A mighty black bull with fearsome horns. Do not wear red if you want to steer clear of its rage." />} */}

        {/* <HornedBeast title={data[0].title} imageUrl={data[0].image_url} description={data[0].description} />
        <HornedBeast title={data[1].title} imageUrl={data[1].image_url} description={data[1].description} />
        <HornedBeast title={data[2].title} imageUrl={data[2].image_url} description={data[2].description} />
        <HornedBeast title={data[3].title} imageUrl={data[3].image_url} description={data[3].description} />
        <HornedBeast title={data[4].title} imageUrl={data[4].image_url} description={data[4].description} />
        <HornedBeast title={data[5].title} imageUrl={data[5].image_url} description={data[5].description} />
        <HornedBeast title={data[6].title} imageUrl={data[6].image_url} description={data[6].description} />
        <HornedBeast title={data[7].title} imageUrl={data[7].image_url} description={data[7].description} />
        <HornedBeast title={data[8].title} imageUrl={data[8].image_url} description={data[8].description} />
        <HornedBeast title={data[9].title} imageUrl={data[9].image_url} description={data[9].description} />
        <HornedBeast title={data[10].title} imageUrl={data[10].image_url} description={data[10].description} />
        <HornedBeast title={data[11].title} imageUrl={data[11].image_url} description={data[11].description} />
        <HornedBeast title={data[12].title} imageUrl={data[12].image_url} description={data[12].description} />
        <HornedBeast title={data[13].title} imageUrl={data[13].image_url} description={data[13].description} />
        <HornedBeast title={data[14].title} imageUrl={data[14].image_url} description={data[14].description} />
        <HornedBeast title={data[15].title} imageUrl={data[15].image_url} description={data[15].description} />
        <HornedBeast title={data[16].title} imageUrl={data[16].image_url} description={data[16].description} />
        <HornedBeast title={data[17].title} imageUrl={data[17].image_url} description={data[17].description} />
        <HornedBeast title={data[18].title} imageUrl={data[18].image_url} description={data[18].description} />
        <HornedBeast title={data[19].title} imageUrl={data[19].image_url} description={data[19].description} /> */}
        {beastData.map((beast, key)=> {
            return (
                <HornedBeast 
                    key={beast._id}
                    beastObject={beast}
                    title={beast.title} 
                    imageUrl={beast.image_url} 
                    description={beast.description} 
                    handleModal={handleModal} 
                />)
            })}
        </main>
    )
}

