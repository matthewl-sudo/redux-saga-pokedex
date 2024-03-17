import React, { useState } from "react";
import { useSelector } from "react-redux";
import Stats from "./Stats";
import Carousel from "./Carousel";
import MoveList from "./MoveList";
import Pagination from "./Pagination";

const InfoStatsContainer = () => {
	const selectedPokemon = useSelector((state) => state.pokemon);
	const info = useSelector((state) => state.pokemon.info);

	const [currPage, setCurrPage] = useState(1);
	const [movesPerPage] = useState(4);

	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	if (info) {
		// Get current Moves
		const indexOfLastMove = currPage * movesPerPage;
		const indexOfFirstMove = indexOfLastMove - movesPerPage;
		const currMoves = info[10].slice(indexOfFirstMove, indexOfLastMove);

		// Change page
		const paginate = (pageNumber) => setCurrPage(pageNumber);
		// console.log('info', info)

		return (
			<div className="infoStatsContainer">
				<h4> {"No: #" + info[6] + " / " + selectedPokemon.name} </h4>
				<Carousel images={info[16]} />
				<div className="bloc-tabs">
					<div
						className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(1)}
					>
						<h4>Moves</h4>
					</div>
					<div
						className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(2)}
					>
						<h4>Stats</h4>
					</div>
					{/* <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={()=>toggleTab(3)}>
                        <h4>habitat & genus</h4>
                    </div> */}
				</div>
				<div className="content-tabs">
					<div
						className={toggleState === 1 ? "content active-content" : "content"}
					>
						<MoveList moves={currMoves} />
						<Pagination
							movesPerPage={movesPerPage}
							totalMoves={info[10].length}
							paginate={paginate}
						/>
					</div>
				</div>
				<div className="content-tabs">
					<div
						className={toggleState === 2 ? "content active-content" : "content"}
					>
						<Stats info={info} />
					</div>
				</div>
				{/* <div className="content-tabs">
                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <h4>Habitat & Genus</h4>
                        <p>{colorDescription}</p>
                    </div>
                </div> */}
			</div>
		);
	} else {
		return <h1>Loading...</h1>;
	}
};

export default InfoStatsContainer;
