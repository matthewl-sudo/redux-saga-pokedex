import React, {useEffect, useState} from "react";
import _ from "lodash";
// import {useDispatch, useSelector} from "react-redux";

const Carousel = (images) =>{

    const pokeimg = _.values(images)[0];

    const versionImgs = Object.keys(pokeimg.versions).map((img, key)=>{
        // console.log("gen:", key+1 , Object.keys(_.values(pokeimg.versions[img])[0]), img)
        const genImg = Object.keys(_.values(pokeimg.versions[img])[0]).map((i, key)=>{
            if (typeof _.values(pokeimg.versions[img])[0][i] != 'object' && _.values(pokeimg.versions[img])[0][i] != null) {
                // console.log( i, key, _.values(pokeimg.versions[img])[0][i]);
                return (<img src={_.values(pokeimg.versions[img])[0][i]} key={_.values(pokeimg.versions[img])[0][i]} alt={i} width="50" height="50" />)
            }
        })
        return genImg;
    })
    // console.log('jaja', pokeimg);

    const otherImgs = _.values(pokeimg.other).map((img, key)=>{
        // console.log('img' , img, 'key', key, '.value')
        const otherImg = _.values(img).map((i, key)=>{
            if (i != null) {
                return (<img src={i} key={i} alt={i} width="50" height="50" />)
                // console.log(i, key)
            }
        })
        return otherImg;
    })
    const spriteImg = Object.keys(pokeimg).map((img, key) =>{
        // console.log('pokeimg', pokeimg[img]);
        if ( pokeimg[img] != null && typeof pokeimg[img] != 'object') {
            return (<img src={pokeimg[img]} key={key} alt={key} width="50" height="50"/>)
        }
    });

    return(
        <div>
            Carousels goes here
            <hr/>
            spriteImages
            {spriteImg}
            <hr/>
            otherIMGS
            {otherImgs}
            <hr/>
            Generations
            {versionImgs}
            <hr/>
        </div>
    )
};

export default Carousel;
