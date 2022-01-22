import { React, useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./Move.scss";

const Card = ({enText, moveName, moveDetails, loading}) =>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    
    if (!_.isEmpty(enText)) {
        const text = enText;
        console.log('flavor text', enText)
        return (
            <div className="container">
              <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                  <span>{loading}</span>
                  <img
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                    alt="User avatar"
                  />
                </button>
                <nav
                  ref={dropdownRef}
                  className={`menu ${isActive ? "active" : "inactive"}`}
                >
                  <ul>
                    <li>
                      <p>{text}</p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          );
    }
    else{
        return (
            <p>empty</p>
        )
    }

    
}
function useAsyncHook(currUrl){
    // console.log(currUrl);
    const [moveDetails, setMoveDetails] = useState([]);
    const [loading, setLoading] = useState("false");
    useEffect(() => {
        async function fetchMoveDetails(currUrl){
            try{
                setLoading("true");
                const response = await fetch(currUrl);
                const json = await response.json();
                setMoveDetails(json)
                // console.log("moveDEEET",moveDetails.name);
                setLoading("false");

            }
            catch(error){
                setLoading("null");
                console.log('err', error);
            }
        };
        if (currUrl !==  ""){
            fetchMoveDetails(currUrl);
        }
    }, [currUrl]);

    return [moveDetails, loading];
}
const Move = ({moveName, url, versionDetails}) =>{
    const [moveUrl, setMoveUrl] = useState("")
    const [moveDetails, loading] = useAsyncHook(moveUrl);

    if(moveName){
        

        return(
            <div className="container">
                <div className="menu-container"onClick={() =>setMoveUrl(url)}> <p>{moveName}</p>
                {_.isEmpty(moveDetails) ? (
                    <i>blank</i>
                ) : loading === "true" ? (
                    <i>loading</i>
                ) : (
                   <p>not empty</p>
                )}
                </div>
            </div>
        )
    }
   
    // if(!_.isEmpty(moveDetails.flavor_text_entries)){
    //     const enText = _.flow([
    //         Object.entries,
    //         arr => arr.filter(([key, value]) => value.language.name === "en"),
    //         arr => arr.reduce(
    //             (acc, value) => (
    //                 value && value[1].flavor_text && acc.set(value[1].flavor_text, value),
    //                 acc
    //                 ), // using map (preserves ordering)
    //                 new Map()
    //             ).values(),
    //         Object.fromEntries
    //     ])(moveDetails.flavor_text_entries);

    //     console.log('english text', enText);
    //     console.log('move details', moveDetails)

    //     return(
    //         <div className="container">
    //             on
    //             <div className="menu-container"onClick={() =>setMoveUrl(url)}> <p>{moveName}</p>
    //             {_.isEmpty(moveDetails) ? (
    //                 <i>blank</i>
    //             ) : loading === "true" ? (
    //                 <i>loading</i>
    //             ) : (
    //                 <Card enText={Object.values(enText)[0].flavor_text}
    //                       moveName={moveName}
    //                       moveDetails={moveDetails}
    //                       loading={loading}
    //                 />
    //             )}
    //             </div>
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div className="menu-container">
    //             <div className="menu-container" onClick={() =>setMoveUrl(url)}>
    //             <p>{moveName}</p>
    //             {_.isEmpty(moveDetails) ? (
    //                 <div className="menu-container">
    //                 <button  className="menu-trigger">
    //                   <img
    //                     src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
    //                     alt="User avatar"
    //                   />
    //                 </button>
    //               </div>
    //             ) : loading === "false" ? (
    //                 <i>No details found</i>
    //             ) : (
    //                 <i>-nothing else return</i>

    //             )}
    //             </div>
    //         </div>
    //     )
    // }
};

export default Move;
