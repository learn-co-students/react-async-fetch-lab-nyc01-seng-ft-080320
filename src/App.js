// create your App component here
import React from 'react'
import AstronautContainer from './Containers/AstronautContainer'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            apiResp: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({apiResp: data.people}))
    }
    render(){
        return(
            <AstronautContainer astronauts={this.state.apiResp}/>
        )
    }
}

export default App