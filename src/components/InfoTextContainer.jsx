import React, {useState} from "react";
import { useSelector } from "react-redux";
import RichText from "./RichText";
import EvolutionChain from "./EvolutionChain"
// import _ from "lodash";
// import deepdash from "deepdash";
import "./InfoTextContainer.scss"

const InfoTextContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon.name);
    const text = useSelector((state) => state.pokemon.text);
    const names = useSelector((state) => state.pokemon.evoChain);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
   if(text){
       const colorDescription = text[2].name+", "+text[25].name+", "+text[10][7].genus;
       return(<div className="InfoTextContainer">
                <i> {selectedPokemon}</i>
                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={()=>toggleTab(1)}>
                        <h4>version text</h4>
                    </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={()=>toggleTab(2)}>
                        <h4>evolutionary forms</h4>
                    </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={()=>toggleTab(3)}>
                        <h4>habitat & genus</h4>
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <h4>Version Text</h4>
                        <RichText text={text}/>
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <h4>Evolutionary Forms</h4>
                        <EvolutionChain names={names}/>
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <h4>Habitat & Genus</h4>
                        <p>{colorDescription}</p>
                    </div>
                </div>
            </div>)
    }
    else{
        return(<div>
                <h1>No info </h1>
            </div>)
    }
}

export default InfoTextContainer;
