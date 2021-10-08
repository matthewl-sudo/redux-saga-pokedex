import React, {useState} from "react"
import './App.css';
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
  return (
    <div className="grid">
      <div className="grid-item box1 ">
        <h1>search box</h1>
        {!search ?
          <button onClick={handleSearch}>Search</button>:
          <button onClick={handleSearch}>List</button>}
        {search ?
          <AutoComplete/>:
          <ListSelection names={["bulbasaur", "charmander", "squirtle"]} />
        }
      </div>
      <div className="grid-item box2">
        <h2>main info box</h2>
        <InfoStatsContainer/>
      </div>
      <div className="grid-item box3">
        <h3>another info box</h3>
        <InfoTextContainer/>
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
