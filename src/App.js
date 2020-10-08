import React from 'react'

class App extends React.Component {

    state = {
        list: []
    }


    renderList = () => {
        return this.state.list.map(el => <h1>{el.name}</h1>)
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                list: data.people
            }
        )})
    }
}

export default App