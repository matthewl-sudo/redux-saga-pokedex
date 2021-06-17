import React,{} from "react"
import './App.css';
import AutoComplete from './components/AutoComplete';
import InfoContainer from './components/InfoContainer';
import ListSelection from './components/ListSelection';

import {useDispatch, connect} from "react-redux"
import { fetchProfileAction } from "./actions";
const App = () => {
  // console.log(props)
  const dispatch = useDispatch()
  const handleDispatch = () => {
  dispatch(fetchProfileAction())
  }

  return (
    <div className="grid">
      <div className="grid-item box1 ">
        <h1>search box</h1>
        <AutoComplete/>
        <ListSelection names={["bulbasaur", "charmander", "squirtle"]} />
        <button onClick={handleDispatch}>
          mew
        </button>
      </div>
      <div className="grid-item box2">
      <h1>main info box</h1>
      </div>
      <div className="grid-item box3">
        <h1>another info box</h1>
        <InfoContainer/>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { data: state.pokemon.name}
}
export default connect(mapStateToProps)(App);
