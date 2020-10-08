//div that holds all the astronauts
import React from 'react'
import Astronaut from '../Components/Astronaut'

function AstronautContainer(props){
    console.log(props.astronauts)
    const astronauts = props.astronauts.map((astro, index) => {
        return <Astronaut key={index} astronaut={astro}/>
    })
    return(
        <div>{astronauts}</div>
    )
}

export default AstronautContainer