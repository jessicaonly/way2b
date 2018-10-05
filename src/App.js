import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  state = {
    results: [],
    // userPic: ''
  }

  getResults = async(e) => {
    const resultsName = e.target.elements.searchQuery.value;
    e.preventDefault();
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users?q=${resultsName}/repos`)
    const returnData= await apiCall.json();
    console.log(returnData)
    this.setState({results: returnData})
    //this.setState({userPic: returnData[0].owner.avatar_url});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Github Search</h1>
        </header>
        <Form getResults={this.getResults} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
