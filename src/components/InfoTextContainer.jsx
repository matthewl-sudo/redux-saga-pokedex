import React from "react";
import { useSelector } from "react-redux";
import RichText from "./RichText";

const InfoTextContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon.name)
    const text = useSelector((state) => state.pokemon.text)
    // console.log(text);

   if(text){ 
       return(<div>
                <h4> {selectedPokemon}</h4>
                <RichText text={text}/>
            </div>)
    }
    else{
        return(<div>
                <h1>No info </h1>
            </div>)
    }
}

export default InfoTextContainer;
