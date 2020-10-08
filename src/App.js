
import React, { Component } from 'react'

class App extends Component {

    state = {
        astros: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(newAstros => this.setState({astros: newAstros.people}))
    }

    renderAstros = () => {
            return this.state.astros.map(astro => {
                return <h1 key={astro.name}>{astro.name}</h1>
            })
        }



    render() {
        return (
            <div>
                {this.renderAstros()}
            </div>
        )
    }
}

export default App;