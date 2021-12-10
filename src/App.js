import React, {useState} from "react"
import './App.scss';
//components
import AutoComplete from './components/AutoComplete';
import ListSelection from './components/ListSelection';
//containers
import InfoStatsContainer from './components/InfoStatsContainer';
import InfoTextContainer from './components/InfoTextContainer';
//redux
// import { connect} from "react-redux"

const App = () => {
  const [search, setSearch] = useState(true);
  const handleSearch = () => {
    setSearch(!search)
  }
  const [panel, setPanel] = useState(false);
  const handlePanel = () =>{
    setPanel(!panel)
  }
  return (
    <div className={panel ? "grid" : "single-column"}>
        <nav role="navigation" className="">
          <div id="menuToggle">
            <input type="checkbox" onClick={handlePanel}/>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#home"><li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#info"><li>Info</li></a>
              <p>what exactly is going on under the hood?</p>
            </ul>
          </div>
        </nav>
        <div className="inner-grid">
          <div className="grid-item box1 border">
            <div className="circle"></div>
            <br/><br/><br/>
            {!search ?
              <button onClick={handleSearch}>Search</button>
              :
              <button onClick={handleSearch}>List</button>
            }
            {search ?
              <AutoComplete/>:
              <ListSelection names={["bulbasaur", "charmander", "squirtle"]} />
            }
          </div>
          <div className="grid-item box2 border">
            <InfoTextContainer/>
          </div>
          <div className="grid-item box3 border">
            <h4>main info box</h4>
            <InfoStatsContainer/>
          </div>
        </div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   console.log(state.pokemon.isLoading)
//   return { data: state.pokemon.name}
// }
// export default connect(mapStateToProps)(App);

export default App;
