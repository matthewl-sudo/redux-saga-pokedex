import { React, } from "react";
import { fetchProfileAction } from "../actions";
import {connect} from "react-redux";
import _ from "lodash";
import { useSelector } from "react-redux";
import "./EvolutionChain.css";
// import {useDispatch, useSelector} from "react-redux";


const EvolutionChain = ({names, color, fetchProfileAction}) =>{
    const selectedPokemon = useSelector((state) => state.pokemon.name);

    function dispatchBtnAction(e) {
      const pokemonName = e.target.dataset.name;
      fetchProfileAction(pokemonName);
  }
  console.log('name', color);
    return(
        <div>
            {!_.isEmpty(names) && names.length > 1 ?
                names.map((name, i) =>(<div key={i}>
                   { name !== selectedPokemon ?
                    <div className={`button ${color}`}>
                        <button
                            data-name={name}
                            key={i}
                            onClick={dispatchBtnAction}>{name}
                        </button>
                    </div>:
                    <div className="button inactive" >
                        <button
                            className="inactive"
                            data-name={name}
                            key={i}
                            ><span className="indicator">&gt;</span>{name}
                        </button>
                    </div>}
                </div>))
            :
                <p> does not have any known evolutionary forms</p>}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(EvolutionChain);
