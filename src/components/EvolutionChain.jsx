import { React, } from "react";
import { fetchProfileAction } from "../actions";
import {connect} from "react-redux";
import _ from "lodash";
import { useSelector } from "react-redux";
import "./EvolutionChain.scss";
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
           
            {/* <div class="social-buttons">
                <button onClick={()=> alert("hi")} class="social-btn entypo-tumblr" ><div class="hover"><span>aaa</span>qqqq<span>swqswq</span>wdwd<span>wqdqd</span>wqssw<span>sqs</span>dqwdw</div><div class="sr"></div></button> 
            </div> */}
            {!_.isEmpty(names) && names.length > 1 ?
                names.map((name, i) =>(
                    name !== selectedPokemon ?
                    <div class={`button ${color}`}>
                        <button
                            data-name={name}
                            key={i}
                            onClick={dispatchBtnAction}>{name}
                        </button>
                    </div>:
                    <div class="button inactive" >
                        <button
                            className="inactive"
                            data-name={name}
                            key={i}
                            ><span className="indicator">&gt;</span>{name}
                        </button>
                    </div>)
                )
            :
                <p> does not have any known evolutionary forms</p>}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(EvolutionChain);
