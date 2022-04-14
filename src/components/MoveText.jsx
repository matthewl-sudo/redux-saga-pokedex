import { React,  } from "react";
import _ from "lodash";
import "./MoveText.scss"
// import deepdash from "deepdash";
import tutorIcon from "./assets/tutor-icon.png"
import tmIcon from "./assets/tm-icon.png"
import eggIcon from "./assets/egg-icon.png"


const MoveText = ({text, versionDetails}) =>{
    const tutor = tutorIcon;
    const machine = tmIcon;
    const egg = eggIcon;
    // deepdash(_).eachDeep(versionDetails, (value, k, path, context, parent, parentKey, parentPath) => {
    //     if (value >= 1 && value !== null && typeof value !== 'object' && k !== 'url' && k !== '0'){
    //         console.log(value);
    //     }
    // });

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
    ])(text.flavor_text_entries); 
 //    console.log('english text', _.values(enText));
        console.log("vers", versionDetails, _.values(enText));
    return( <div >
                <div className="horizontal-version-text">
                    {/* I really don't like this triple ternary operator... it works but might revise later on */}
                    <span className="version-text">{window.innerWidth < 600 ? "Swipe left for different version learning methods" : "Scroll right for different version learning methods"}</span>
                    {_.values(versionDetails).map((value, key)=>{
                        return (<span key={key} className="version-text">
                                    <p>{value.version_group.name} : 
                                    {value.level_learned_at > 0 ? 
                                    "LVL "+value.level_learned_at : 
                                    <img src={value.move_learn_method.name === 'machine'?
                                                                            machine : value.move_learn_method.name === 'tutor'?
                                                                            tutor : egg
                                    } alt={value.move_learn_method.name} width="20px"/>}</p>
                                </span>)
                        })
                    }
                </div>
                {/* <img src={tutor} alt={tutor} width="30px"/>
                <img src={machine} alt={machine} width="30px"/>
                <img src={egg} alt={egg} width="30px"/> */}

                <div className="horizontal-snap">
                    {_.values(enText).map((value, key)=> {
                        return (<span key={key} className="dialogue-box">
                                    <p className="">{value.flavor_text}</p>
                                    <p className="author">~{value.version_group.name}<i></i></p>
                                </span>)
                        })
                    }
                </div>
            </div>
    )
};

export default MoveText;
