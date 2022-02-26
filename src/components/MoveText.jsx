import { React,  } from "react";
import _ from "lodash";
import "./MoveText.scss"
// import deepdash from "deepdash";

const MoveText = ({text, versionDetails}) =>{

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
        console.log("vers", versionDetails);
    return( <div >
                <div className="horizontal-version-text">
                    {_.values(versionDetails).map((value, key)=>{
                        return (<span className="version-text">{value.version_group.name} : {value.level_learned_at > 0 ? "LVL:"+value.level_learned_at : value.move_learn_method.name}</span>)
                        })
                    }
                </div>
                <div className="horizontal-snap">
                    {_.values(enText).map((value, key)=> {
                        return (<span><p className="">{value.flavor_text}</p></span>)
                        })
                    }
                </div>
            </div>
    )
};

export default MoveText;
