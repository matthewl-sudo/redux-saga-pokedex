import { React, } from "react";
import { fetchProfileAction } from "../actions";
import {connect} from "react-redux";
// import {useDispatch, useSelector} from "react-redux";
// import _ from "lodash";
// import {Link} from "react-router-dom";

const ListSelection = ({names, fetchProfileAction}) =>{
  function dispatchBtnAction(e) {
      const pokemonname = e.target.dataset.name;
      fetchProfileAction(pokemonname);
  }
    return(
        <div>
            <p>List selection</p>
            {names.map((name, i) =>(
            <button
                data-name={name}
                key={i}
                onClick={dispatchBtnAction}
            >{name}</button>))}
        </div>
    )
};

export default connect(null,{fetchProfileAction})(ListSelection);