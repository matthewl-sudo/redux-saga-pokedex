import { React,} from "react";
// import {useDispatch, useSelector} from "react-redux";
// to see git changes from password to personal access token
import "./Stats.scss";
import color from "./color.module.scss";
import 'chart.js/auto';
import {Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend,} from 'chart.js';
import {Chart} from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
ChartJS.defaults.plugins.legend.display = false;

const Stats = (info) =>{
    const statInfo = info.info;
    const statColor = color[statInfo[16][0].type.name];
    // console.log('color', statColor);
    const weight = statInfo[17].toString().slice(0,statInfo[17].toString().length-1)+'.'+ statInfo[17].toString().slice(statInfo[17].toString().length-1);

    const data = {
        //Will show up on each radar points in clockwise order
        labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
        datasets: [{
            label: "Stats",
            //one data obj per set, order same as labels
            data: [
                // statInfo[15].map((value) => value.base_stat)
                statInfo[15][0]["base_stat"], //HP
                statInfo[15][1]["base_stat"], //Atk
                statInfo[15][2]["base_stat"], //Def
                statInfo[15][3]["base_stat"], //SpA
                statInfo[15][4]["base_stat"], //SpD
                statInfo[15][5]["base_stat"], //Speed
              ],
              backgroundColor: statColor,
              borderWidth: 10,
          },
          /*Add another set if needed like so
          {
             data: [ ]
          },
          */
        ],
    }
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
                <Chart type='radar' height={50} width={50} data={data}/>

            </div>
        </div>
    );
};

export default Stats;


// import { React, } from "react";
// // import {useDispatch, useSelector} from "react-redux";
// // to see git changes from password to personal access token
// import "./Stats.scss";

// const Stats = (info) =>{
//     const statInfo = info.info;
//     // console.log('statInfo', statInfo);
//     const weight = statInfo[17].toString().slice(0,statInfo[17].toString().length-1)+'.'+ statInfo[17].toString().slice(statInfo[17].toString().length-1);
//     return(
//         <div className="statsGrid">
//             <div className="gridItem statBox1">
//                 <h4>{statInfo[2][0].name}</h4>
//                 <p>Weight: {weight}Kg/{Math.round(weight*2.205)}Lbs</p>
//                 <p>Height: { statInfo[4].toString().length > 1 ? statInfo[4].toString().slice(0,statInfo[4].toString().length-1)+'.'+statInfo[4].toString().slice(statInfo[4].toString().length-1) : '0.'+ statInfo[4].toString().slice(statInfo[4].toString().length-1)}M</p>
//                 <p className="t-type">Type: {statInfo[16].map((i, key)=>{
//                     return (<span className={statInfo[16][key].type.name} key={key}>{key > 0 ? '' : ''}{statInfo[16][key].type.name}</span>)
//                     }
//                 )}</p>
//             </div>
//             <div className="gridItem statBox2">
//                 {statInfo[15].map((value, key) =>{
//                             return <p className="stats-list" key={key}>{value.stat.name}: {value.base_stat}</p>
//                         })
//                     }

//             </div>
//         </div>
//     )
// };

// export default Stats;
