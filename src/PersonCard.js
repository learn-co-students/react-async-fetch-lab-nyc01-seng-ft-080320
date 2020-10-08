import React from "react"

class PersonCard extends React.Component {
  render() {
    console.log("personcard")
    return (
      <div>
        <h3>Name: {this.props.astro.name}</h3>
        <h3>Craft: {this.props.astro.craft}</h3>        
      </div>
    )
  }
}

export default PersonCard;
