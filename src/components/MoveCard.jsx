import { React, useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./MoveCard.scss";
import carotIcon from "./next.png"

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
const MoveCard = ({moveName, url, versionDetails}) =>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    
    const [moveUrl, setMoveUrl] = useState("")
    const [moveDetails, loading] = useAsyncHook(moveUrl);

    if(moveName){
        

        return(
                <div className="container"onClick={() =>setMoveUrl(url)}>
                {_.isEmpty(moveDetails) ? (
                    <div className="menu-container">
                      <span>
                        <button onClick={onClick} className="menu-trigger">
                          
                          <img className="toggle" aria-expanded={isActive}
                            src={carotIcon}
                            alt="User avatar"
                          />
                        </button>
                      {moveName}</span>
                      <nav
                        ref={dropdownRef}
                        className={`menu ${isActive ? "active" : "inactive"}`}
                      >
                      </nav>
                    </div>
                ) : loading === "true" ? (
                    <i>loading</i>
                ) : (
                    <div className="menu-container">
                      <span><button onClick={onClick} className="menu-trigger">
                        <img className="toggle" aria-expanded={isActive}
                          src={carotIcon}
                          alt="User avatar"
                        />
                      </button>
                      {moveName}</span>
                      <nav
                        ref={dropdownRef}
                        className={`menu ${isActive ? "active" : "inactive"}`}
                      >
                        <ul>
                          <li>
                            <p>Power:{moveDetails.power}</p>
                          </li>
                        </ul>
                      </nav>
                    </div>
                )}
                </div>
        )
    }
};

export default MoveCard;
