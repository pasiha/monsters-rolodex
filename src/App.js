import React, { Component } from 'react';

import Search from "./components/search/search"
import CardList from "./components/card-list/card-list"
import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchTerm: ""
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users, found: users }))
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e })
  }


  render() {

    return (
      <div className="App">
        <Search placeholder="Etsi monsteria"
          etsi={this.handleChange} />

        <CardList monsters={this.state.monsters} search={this.state.searchTerm} />

      </div>
    )
  }
}

export default App;
