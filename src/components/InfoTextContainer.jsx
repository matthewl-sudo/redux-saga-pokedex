import React from "react";
import { useSelector } from "react-redux";
import RichText from "./RichText";

const InfoTextContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon.name)
    const text = useSelector((state) => state.pokemon.text)
    let evo = text ? text[4].url : "nothing";
    if (!evo === "nothing") {
        fetch("https://pokeapi.co/api/v2/evolution-chain/1/").then((res) => console.log('res')).catch((err)=> console.log('error', err))
    }
    fetch(evo)
        .then(response => response.json())
        .then(data => console.log(data.chain))
        .catch((err)=> console.log('error', err))

    console.log(`"${evo}"`)

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
