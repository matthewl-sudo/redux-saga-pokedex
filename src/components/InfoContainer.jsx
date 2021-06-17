import React from "react";
import { useSelector } from "react-redux";

const InfoContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon)
    return(<div>
            <h1>hello {selectedPokemon.name} </h1>
        </div>)
} 

export default InfoContainer;