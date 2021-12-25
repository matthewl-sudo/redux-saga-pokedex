import React,{useState} from "react";
import { useSelector } from "react-redux";
import Stats from "./Stats";
import Carousel from "./Carousel";
import MoveList from "./MoveList";
import Pagination from "./Pagination";

const InfoStatsContainer = () => {
    const selectedPokemon = useSelector((state) => state.pokemon)
    const info = useSelector((state) => state.pokemon.info)

    const [currPage, setCurrPage] = useState(1);
    const [movesPerPage, setMovesPerPage] = useState(5);
    if (info) {
        
        // Get current Moves
        const indexOfLastMove = currPage * movesPerPage;
        const indexOfFirstMove = indexOfLastMove - movesPerPage;
        const currMoves = info[9].slice(indexOfFirstMove, indexOfLastMove)
        // Change page
        const paginate = (pageNumber) => setCurrPage(pageNumber)
        // console.log('fbdshbdh', info[9].length)
        // console.log('info', info)

        return(<div className="infoStatsContainer">
                <h3> {selectedPokemon.name} </h3>
                <Carousel images={info[14]}/>
                <MoveList moves={currMoves}/>
                <Pagination movesPerPage={movesPerPage} 
                            totalMoves={info[9].length}
                            paginate={paginate}
                />
                <Stats info={info}/>
            </div>)
    }
    else {
        return(
            <h1>Loading...</h1>
        )
    }
}

export default InfoStatsContainer;
