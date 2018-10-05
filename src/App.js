import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  state = {
    results: [],
    userPic: ''
  }

  getResults = async(e) => {
    const resultsName = e.target.elements.searchQuery.value;
    e.preventDefault();
    try {
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${resultsName}/repos`)
    const returnData= await apiCall.json();
    console.log(returnData)
    this.setState({results: returnData})
    console.log(this.state.results)
    this.setState({userPic: this.state.results[0].owner.avatar_url})
    console.log(this.state.results[0].owner.avatar_url)
    }
    catch(e){
      console.log('There was an error!')
      this.setState({userPic: `https://img.itch.zone/aW1hZ2UvMTUzMzQwLzcwMjU1OC5wbmc=/original/FkET0M.png`})
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Github Search</h1>
        </header>
        <div className="Container">
        <Form getResults={this.getResults} />
        <img src={this.state.userPic}
                  alt={this.state.userPic}/>
        <div className="ResultsContainer">
        <Results results={this.state.results} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
