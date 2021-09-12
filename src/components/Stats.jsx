import { React, } from "react";
// import {useDispatch, useSelector} from "react-redux";


const Stats = (info) =>{
    const statInfo = info.info;
    console.log('statInfo', statInfo[16]);
    return(
        <div>
            Stats goes here
            weight: {statInfo[17]}
            {statInfo[16].map((i, key)=>{
                return (<p key={key}>{statInfo[16][key].type.name}</p>)
                }
            )}
        </div>
    )
};

export default Stats;
