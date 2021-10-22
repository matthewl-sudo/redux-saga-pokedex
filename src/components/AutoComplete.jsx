import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProfileAction } from "../actions";
// import {useDispatch, useSelector} from "react-redux";
// import _ from "lodash";

const AutoComplete = ({fetchProfileAction}) =>{
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");

    //set api call
    useEffect(()=>{
        const pokemon = [];
        const promises = new Array(500).fill().map((value, index)=>
            fetch(`https://pokeapi.co/api/v2/pokemon-form/${index+1}`));
            
        Promise.all(promises).then((pokemonArr) => {
            return pokemonArr.map(res => res.json().then(
                ({name})=>{
                    return pokemon.push({name});
            }));
        }, (error)=> {
            console.log(error)});
        setOptions(pokemon)
    }, []);


    const setPokemonSearch = poke => {
        setSearch(poke);
        setDisplay(false);
        fetchProfileAction(poke);
    };


    return(
        <div>
           <input 
           id="auto" 
           onClick={()=> setDisplay(!display)}
           placeholder="Type to Search"
           value={search}
           autocomplete="off"
           onChange={event => setSearch(event.target.value)}
           />
           {display && (
               <div className="autoContainer">
                   {options
                   .filter(({name}) => name.indexOf(search.toLowerCase()) > -1).slice(0,5)
                   .map((value, index) => {
                       return (<div onClick={()=> setPokemonSearch(value.name)} className="option" key={index} tabIndex="0">
                           <span>{value.name}</span>
                       </div>)
                   })}
               </div>
           )}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(AutoComplete);