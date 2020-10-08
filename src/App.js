// create your App component here
import React from 'react';
import PersonCard from './PersonCard'

export default class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.getAstros()
  }

  getAstros = () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({
        people: data.people
      }))
  }

  renderPeople = () => {
    return this.state.people.map(astro => <PersonCard astro={astro} />)
  }

  render() {
    return (
      <div>
        {this.renderPeople()}
      </div>
    )
  }
}