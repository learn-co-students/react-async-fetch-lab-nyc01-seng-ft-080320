// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        something: ""
    }

    render() {
        return (console.log("hello"))
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                something: data.people
            })
        })
    }

}

export default App;