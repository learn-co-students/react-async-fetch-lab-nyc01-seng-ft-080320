import React, { Component } from 'react'

export default class People extends Component {
  
    render() {
        console.log(this.props.people)
        return (
            <div>
                <table border="2">
                    <thead>
                    <tr>
                        {this.props.people.map((person) =>(
                            <td>{person.name}</td>    
                        ))}
                    </tr>
                    <tr>
                        {this.props.people.map((person) =>(
                            <td>{person.craft}</td>    
                        ))}
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }

    
}
