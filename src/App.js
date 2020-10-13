// create your App component here
import React from 'react';

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => this.setState({ people: data }))
    }

    render() {
        return (
            <div>
                {this.state.people.map(el => <h1>key={el.id} name={el.name}</h1>)}
            </div>
        )
    }
}

export default App;