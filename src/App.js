import React from 'react';

class App extends React.Component {

    state={
        url: "http://api.open-notify.org/astros.json",
        astronauts: []
    }


    componentDidMount() {
        fetch(this.state.url)
        .then(response => response.json())
        .then(astros => {
            this.setState(prevState => {
                return  {
                    astronauts: [...prevState.astronauts, ...astros.people]
                }
            })
        })
    }

    renderAstronauts() {
        return this.state.astronauts.map(astro => {
            return <li key={astro.name}>{astro.name}: {astro.craft}</li>
        })
    }

    render(){
        return (
            <React.Fragment>
                <h1>List of Astronauts</h1>
                <ol>{this.renderAstronauts()}</ol>
            </React.Fragment>
        )
    }

}

export default App