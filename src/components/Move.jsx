import { React, useState, useEffect } from "react";
import _ from "lodash";

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
            }
            catch(error){
                setLoading("null");
                console.log('err'. error);
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


    if(!_.isEmpty(moveDetails.flavor_text_entries)){
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
        ])(moveDetails.flavor_text_entries);

        console.log('english text', Object.values(enText));
        console.log(moveDetails)

        return(
            <div>
                <p onClick={() =>setMoveUrl(url)}>{moveName}
                {_.isEmpty(moveDetails) ? (
                    <i>blank</i>
                ) : loading === "null" ? (
                    <i>No details found</i>
                ) : (
                    <i>-{Object.values(enText)[0].flavor_text}</i>

                )}
                </p>
            </div>
        )
    }
    else {
        return(
            <div>
                <p onClick={() =>setMoveUrl(url)}>{moveName}
                {_.isEmpty(moveDetails) ? (
                    <i>blank</i>
                ) : loading === "null" ? (
                    <i>No details found</i>
                ) : (
                    <i>-nothing</i>

                )}
                </p>
            </div>
        )
    }
};

export default Move;
