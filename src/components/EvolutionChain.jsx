import { React, } from "react";
import { fetchProfileAction } from "../actions";
import {connect} from "react-redux";
import _ from "lodash";
// import {useDispatch, useSelector} from "react-redux";


const EvolutionChain = ({names, fetchProfileAction}) =>{

  function dispatchBtnAction(e) {
      const pokemonname = e.target.dataset.name;
      fetchProfileAction(pokemonname);
  }
    return(
        <div>
            <p>Evolutionary Forms</p>
            {!_.isEmpty(names) && names.length > 1 ?
                names.map((name, i) =>(
                    <button
                        data-name={name}
                        key={i}
                        onClick={dispatchBtnAction}>{name}
                    </button>)
                )
            :
                <p> does not have any known evolutionary forms</p>}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(EvolutionChain);
