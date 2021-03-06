import { React,  } from "react";
// import _ from "lodash";
// import deepdash from "deepdash";
// import Move from "./Move";
import MoveCard from "./MoveCard"

const MoveList = ({moves}) =>{
   
    return(
        <div>
            {moves.map((move, key) =>{
                return <MoveCard key={key} 
                            moveName={ move.move.name}
                            url={move.move.url}
                            versionDetails={move.version_group_details}
                    />
                }
            )}
        </div>
    )
};

export default MoveList;
