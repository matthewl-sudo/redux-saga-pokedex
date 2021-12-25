import { React, useState } from "react";
import _ from "lodash";
// import deepdash from "deepdash";
import Move from "./Move";

const MoveList = ({moves}) =>{
   
    return(
        <div>
            {moves.map((move, key) =>{
                return <Move key={key} 
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
