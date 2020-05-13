import React from 'react';
import './NmapBuilder.css';

function ChangeN() {
    let maps;
    maps = document.getElementById("Nscript")
    alert(maps.innerText)
}


function About() {
    return (
        <div>
            <h1>about</h1>
            <button onClick={ChangeN}>Click Me</button>
        </div>
    )
}

export default About;