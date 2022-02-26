import React from "react";

const SideBarPanel = ({handlePanel}) =>{
    const features = {
        1: {name: "React",
            description: "Using builtin hook and custom hooks",
            img: "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png",},
        2: {name: "React-Redux",
            description: " Sassy CSS, a necessity in any frontend developers repertoire.",
            img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",},
        3: {name: "Redux-Saga Middleware",
            description: "using builtin hook and custom hooks",
            img: "https://miro.medium.com/max/312/1*kuITW-HAzQSTqp40IcOziQ.png",},
        4: {name: "API",
            description: "using builtin hook and custom hooksusing builtin hook and custom hooksusing builtin hook and custom hooks",
            img: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",},
        5: {name: "CSS Grid",
            description: " Sassy CSS, a necessity in any frontend developers repertoire.",
            img: "https://static.vaadin.com/directory/user70309/icon/file3460235915593609009_1554052408926logo.png",},
        6: {name: "SCSS",
            description: " Sassy CSS, a necessity in any frontend developers repertoire.",
            img: "https://logos-download.com/wp-content/uploads/2016/09/Sass_logo-700x524.png",},
        7: {name: "Mobile Responsive",
            description: "coming soon",
            img: "https://www.clipartmax.com/png/full/150-1506105_responsive-website-desktop-mobile-responsive-design-logo-png.png",},
        8: {name: "DeepDash",
            description: " Sassy CSS, a necessity in any frontend developers repertoire.",
            img: "https://raw.githubusercontent.com/YuriGor/deepdash/HEAD/deepdash.svg?sanitize=true",}
    }
    return(
        <aside role="navigation" className="aside">
            <div id="menuToggle">
                <input type="checkbox" onClick={handlePanel}/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <h3>Pokedex React App</h3>
                    <small> -Made by Matthew Larose</small>
                    <p>what exactly is going on under the hood?</p>
                    {Object.values(features).map((value, key) => {
                       return (<div>
                                <img src={value.img} alt={value.name} width="100px" height="75px"/>
                                <li>
                                    <h5>{value.name}</h5>
                                    <p>{value.description}</p>
                                </li>
                              </div>)
                        }
                    )}
                    <a href="https://github.com/matthewl-sudo/redux-saga-pokedex/tree/master"><li>GitHub</li></a>
                    <a href="https://codepen.io/matthewl-sudo"><li>CodePen</li></a>
                    <a href="#info"><li>Info</li></a>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarPanel;
