import React,{useEffect} from "react"
import './App.css';
import AutoComplete from './components/AutoComplete';
import InfoContainer from './components/InfoContainer';
import store from "./store";
import {useDispatch, connect} from "react-redux"

const App = (props) => {
  console.log(props)

  useEffect(() => {
    // console.log(store.getState)
  }, [])

  return (
    <div className="grid">
      <div className="grid-item box1 ">
        <h1>search box</h1>
        <AutoComplete/>
      </div>
      <div className="grid-item box2">
      <h1>main info box</h1>

        <InfoContainer/>
      </div>
      <div className="grid-item box3">
        <h1>another info box</h1>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { data: state.fetchProfileReducer}
}
export default connect(mapStateToProps)(App);
