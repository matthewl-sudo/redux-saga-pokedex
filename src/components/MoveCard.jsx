import { React, useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./MoveCard.scss";
import carotIcon from "./next.png"
import MoveText from "./MoveText";

function useAsyncHook(currUrl){
    // console.log(currUrl);
    const [moveDetails, setMoveDetails] = useState([]);
    const [loading, setLoading] = useState("false");
    useEffect(() => {
      setLoading("true");
        async function fetchMoveDetails(currUrl){
            try{
                const response = await fetch(currUrl);
                const json = await response.json();
                setMoveDetails(json)
                // console.log("moveDEEET",moveDetails.name);
                // setLoading("false");

            }
            catch(error){
                setLoading("null");
                console.log('err', error);
            }
            setTimeout(function(){setLoading("false")}, 1000)
        };
        
        if (currUrl !==  ""){
            fetchMoveDetails(currUrl)
        }
    }, [currUrl]);

    return [moveDetails, loading];
}
const MoveCard = ({moveName, url, versionDetails}) =>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = (url) => {
      setMoveUrl(url)
      setIsActive(!isActive);
    }
    
    const [moveUrl, setMoveUrl] = useState("")
    const [moveDetails, loading] = useAsyncHook(moveUrl);
    console.log(moveDetails);
   
    
  
        return(
                <div className="container">
                {_.isEmpty(moveDetails) ? (
                    <div className="menu-container">
                      <span>
                        <button  onClick={() =>onClick(url)} className="menu-trigger">
                          
                          <img className={`toggle${isActive ? "active" : "inactive"}`}
                            src={carotIcon}
                            alt="icon"
                          />
                        </button>
                        {moveName}
                      </span>
                      <nav
                        ref={dropdownRef}
                        className={`menu ${isActive ? "active" : "inactive"}`}
                      >
                      </nav>
                    </div>
                ) : loading === "true" ? (
                  <div className="spinner-pokeball"></div>
                ) : (
                    <div className="menu-container">
                      <span><button  onClick={() =>onClick(url)} className="menu-trigger">
                        <img className={`toggle${isActive ? "active" : "inactive"}`} 
                          src={carotIcon}
                          alt="icon"
                        />
                      </button>
                      {moveName}:
                      </span>
                      <nav
                        ref={dropdownRef}
                        className={`menu ${isActive ? "active" : "inactive"}`}
                      >
                        <ul className="moveDropDown">
                          <li>Type:{moveDetails.type.name}</li>
                          <li>Power:{moveDetails.power}</li>
                          <li>Accuracy:{moveDetails.accuracy}</li>
                          <li>PP:{moveDetails.pp}</li>
                          <li>Damage-Type:{moveDetails.damage_class.name}</li>
                          <li>Effect:{moveDetails.effect_entries[0].short_effect}</li>
                          <MoveText text={moveDetails} versionDetails={versionDetails}/>
                        </ul>
                      </nav>
                    </div>
                )}
                </div>
        )
};

export default MoveCard;
