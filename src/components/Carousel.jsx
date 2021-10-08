import React, {useEffect, useState} from "react";
import _ from "lodash";
import "./Carousel.css";
const Carousel = (images) =>{
    const [imgState, setImgState] = useState([])
    const [currIndex, setIndex] = useState(0);

    const pokeimg = _.values(images)[0];

    const versionImgs = Object.keys(pokeimg.versions).map((img, key)=>{
        // console.log("gen:", key+1 , Object.keys(_.values(pokeimg.versions[img])[0]), img)
        const genImg = Object.keys(_.values(pokeimg.versions[img])[0]).map((i, key)=>{
            if (typeof _.values(pokeimg.versions[img])[0][i] != 'object' && _.values(pokeimg.versions[img])[0][i] != null) {
                // console.log( i, key, _.values(pokeimg.versions[img])[0][i]);
                return _.values(pokeimg.versions[img])[0][i]
            }
        })
        return genImg;
    });
    // console.log('jaja', pokeimg);
    const otherImgs = _.values(pokeimg.other).map((img, key)=>{
        // console.log('img' , img, 'key', key, '.value')
        const otherImg = _.values(img).map((i, key)=>{
            if (i != null) {
                // console.log(i, key)
                return i
            }
        })
        return otherImg;
    });
    const spriteImg = Object.keys(pokeimg).map((img, key) =>{
        // console.log('pokeimg', pokeimg[img]);
        if ( pokeimg[img] != null && typeof pokeimg[img] != 'object') {
            return pokeimg[img]
        }
    });

    useEffect(()=>{
        setImgState(imgState => [ otherImgs, versionImgs, spriteImg]);
        setIndex(0);
    }, [pokeimg]);
    // console.log('imgState', _.pull(_.flattenDeep(imgState), undefined));

    return(
        <div className="carousel">
            <div
            className="carouselInner"
            style={{backgroundImage: `url(${_.pull(_.flattenDeep(imgState), undefined)[currIndex]})`}}
            >
                <div
                className="left"
                onClick={() => {
                    currIndex > 0 && setIndex(currIndex - 1);
                }}
                >
                    <h1 style={{ fontSize: 20 }} > ◀️ </h1>
                </div>
                <div className="center"><h1 style={{ fontSize: 15 }} > {currIndex+1} </h1></div>
                <div
                  className="right"
                  onClick={() => {
                    currIndex < _.pull(_.flattenDeep(imgState), undefined).length - 1 && setIndex(currIndex + 1);
                  }}
                >
                    <h1 style={{ fontSize: 20 }} > ▶️ </h1>
                </div>
            </div>
        </div>
    )
};

export default Carousel;
