import React from "react";
import { useSelector } from "react-redux";
import Stats from "./Stats";
import Carousel from "./Carousel";

const InfoStatsContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon)
    const info = useSelector((state) => state.pokemon.info)
    if (info) {
        // console.log('fbdshbdh', info[14])
        // console.log('info', info)

    return(<div className="infoStatsContainer">
            <h3> {selectedPokemon.name} </h3>
            <Carousel images={info[14]}/>
            <Stats info={info}/>
        </div>)
    }
    else {
        return(
            <h1>Loading...</h1>
        )
    }
}

export default InfoStatsContainer;
