import { React, useEffect, useRef } from "react";
// import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import "./RichText.scss";

const RichText = ({text}) =>{
    const textContent = text[6];
    //_.flow to turn object into array then filtering for english text then back into object all in one line
    const enText = _.flow([
        Object.entries,
        arr => arr.filter(([key, value]) => value.language.name === "en"),
        arr => arr.reduce(
            (acc, value) => (
                // eslint-disable-next-line
                value && value[1].flavor_text && acc.set(value[1].flavor_text, value),
                acc
                ), // using map (preserves ordering)
                new Map()
            ).values(),
        Object.fromEntries
    ])(textContent);
    // console.log('english text', Object.values(enText));

    //reset scroll height with useRef and useEffect hook
    const scrollRef = useRef(0)
    useEffect(() => {
        scrollRef.current.scrollTop = 0
    }, [enText])

    return(
        <div>
            <div className="text" ref={scrollRef}>
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
