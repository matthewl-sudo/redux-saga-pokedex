import { React, } from "react";
// import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import "./RichText.css";


const RichText = ({text}) =>{
    const textContent = text[6];
    const colorDescription = text[2].name+", "+text[25].name+", "+text[10][7].genus;
    
    //_.flow to turn object into array then filtering for english text then back into object all in one line
    const enText = _.flow([
        Object.entries,
        arr => arr.filter(([key, value]) => value.language.name === "en"),
        arr => arr.reduce(
            (acc, value) => (
                value && value[1].flavor_text && acc.set(value[1].flavor_text, value),
                acc
                ), // using map (preserves ordering)
                new Map()
            ).values(),
        Object.fromEntries
    ])(textContent);
    // console.log('english text', Object.values(enText));

    return(
        <div>
            <p>{colorDescription}</p>
            <div className="text">
                {Object.values(enText).map((value, key) =>{
                return (<div className="nes-container is-rounded is-centered with-title is-dark" key={key}>
                            <p className="title is-primary">Ver : {value.version.name}</p>
                            <p style={{fontSize:15}}>{value.flavor_text}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
};

export default RichText;
