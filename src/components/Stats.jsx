import { React, } from "react";
// import {useDispatch, useSelector} from "react-redux";
// to see git changes from password to personal access token
import "./Stats.scss";

const Stats = (info) =>{
    const statInfo = info.info;
    // console.log('statInfo', statInfo);
    const weight = statInfo[17].toString().slice(0,statInfo[17].toString().length-1)+'.'+ statInfo[17].toString().slice(statInfo[17].toString().length-1);
    return(
        <div className="statsGrid">
            <div className="gridItem statBox1">
                <h4>{statInfo[2][0].name}</h4>
                <p>Weight: {weight}Kg/{Math.round(weight*2.205)}Lbs</p>
                <p>Height: { statInfo[4].toString().length > 1 ? statInfo[4].toString().slice(0,statInfo[4].toString().length-1)+'.'+statInfo[4].toString().slice(statInfo[4].toString().length-1) : '0.'+ statInfo[4].toString().slice(statInfo[4].toString().length-1)}M</p>
                <p className="t-type">Type: {statInfo[16].map((i, key)=>{
                    return (<span className={statInfo[16][key].type.name} key={key}>{key > 0 ? '' : ''}{statInfo[16][key].type.name}</span>)
                    }
                )}</p>
            </div>
            <div className="gridItem statBox2">
                {statInfo[15].map(el =>{
                            return <p key={el.stat.name}>{el.stat.name}: {el.base_stat}</p>
                        })
                    }

            </div>
        </div>
    )
};

export default Stats;
