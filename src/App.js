import React, {useState} from "react"
import './App.scss';
//components
import SideBarPanel from './components/SideBarPanel';
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
        <SideBarPanel handlePanel={handlePanel}/>
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
            {/* <p>main info box</p> */}
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
