import { React, } from "react";
import _ from "lodash";
import deepdash from "deepdash";


const MoveList = ({moves}) =>{
    console.log('moves',moves);
    let movesArray = [];
    deepdash(_).eachDeep(moves, (value, k, path, context, parent, parentKey, parentPath) => {
        if (typeof {k} === 'object' && k ==='name' && context.obj[0].version_group_details) {
            movesArray.push({key: context.obj[0].version_group_details, value: value})
        }
        // switch (k) {
        //     case "move":
        //         movesArray.push(value)
        //         break;
        //     default:
        //         return
        // }
        // if (k === "move") {
        //     movesArray.push({name:value.name, url:, context});
        // }
        // else
        // if (k) {
        //     sum.push({key:  `${context.parent.key !== '0' ? context.parent.key : ''}${k === 'name'  ? '' : k}`,value : value});
        // }

    });
    console.log(movesArray);
    return(
        <div>

        </div>
    )
};

export default MoveList;
