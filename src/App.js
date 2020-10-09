import React from 'react'

class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({peopleInSpace: data.people}))
    }

    getListOfSpacePeople = () => {
    return this.state.peopleInSpace.map(spaceHuman => <p>{spaceHuman.name} - {spaceHuman.craft}</p>)
    }

    render(){
        console.log(this.getListOfSpacePeople)
        return (<div>
        <h1>People in Space</h1>
        {this.state.peopleInSpace ? this.getListOfSpacePeople() : <p>Fetching space peeps</p>}
        </div>)
    }
}

export default App
