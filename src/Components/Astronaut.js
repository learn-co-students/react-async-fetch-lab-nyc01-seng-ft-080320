import React from 'react'

function Astronaut(props){
    return(
        <div>
            <div>{props.astronaut.name}</div>
            <ul>
                <li>{props.astronaut.craft}</li>
            </ul>
        </div>
    )
}

export default Astronaut