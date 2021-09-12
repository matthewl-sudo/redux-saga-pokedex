import React from "react";
import { useSelector } from "react-redux";
import RichText from "./RichText";

const InfoTextContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon)
    return(<div>
                <h1>hello {selectedPokemon.name} </h1>
                <RichText/>
            </div>)
}

export default InfoTextContainer;
