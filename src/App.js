// create your App component here
import React, { Component } from 'react'
import  People from './People.js'

export default class App extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            people: []
        }
    }
    
    render() {
        return (
            <div>
                <p></p>
                <People people={this.state.people} />
            </div>
            
        )
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => this.setState({...data}))
    }
    
}
