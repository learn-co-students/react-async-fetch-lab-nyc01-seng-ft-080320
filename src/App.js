import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            this.setState({people: data.people})})
    }

    peopleMe = () => {
        return this.state.people.map(person => {
            return (<div>
                {person.name} is on {person.craft}
            </div>)
        })
    }
    render(){
        return(

            <div>{(this.peopleMe())}</div>
        )
    }

}

export default App