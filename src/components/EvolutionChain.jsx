import { React, } from "react";
import { fetchProfileAction } from "../actions";
import {connect} from "react-redux";
import _ from "lodash";
import { useSelector } from "react-redux";
// import {useDispatch, useSelector} from "react-redux";


const EvolutionChain = ({names, fetchProfileAction}) =>{
    const selectedPokemon = useSelector((state) => state.pokemon.name);

    function dispatchBtnAction(e) {
      const pokemonName = e.target.dataset.name;
      fetchProfileAction(pokemonName);
  }
    return(
        <div>
            <p>Evolutionary Forms</p>
            {!_.isEmpty(names) && names.length > 1 ?
                names.map((name, i) =>(
                    name!=selectedPokemon ?
                    <button
                        data-name={name}
                        key={i}
                        onClick={dispatchBtnAction}>{name}
                    </button>:
                    <button
                        className="active"
                        data-name={name}
                        key={i}
                        >{name+"..."}
                    </button>)
                )
            :
                <p> does not have any known evolutionary forms</p>}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(EvolutionChain);
