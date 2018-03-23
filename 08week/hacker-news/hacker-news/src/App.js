import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryItem from './StoryItem';

// Group part 1: (everyone) create new react app called hacker-news
// in the App component did mount - make a fetch call to get a list of top stories, the first 50 stories make a call to get the stories detail using the ID (hint, it’s in the pre-work)
// take those stories and store them in the state in an array called stories

//Part 2: create a StoryItem component
//have it return a card with the props.title, props.by
//import into App 
//for every story in the stories array, return a StoryItem component
//pass this component the title, the author, and the id in the correct props

class App extends Component {
state = {
  stories: []
}
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
      res.json().then((storyIds) => {
        storyIds.slice(0,50).forEach((storyId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
            res.json().then((story) => {
              console.log(story);
              const storyAccess = this.state.stories
              storyAccess.push(story.title)
              this.setState({
                stories: storyAccess
              })
            })
          });
        });
      });
    });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.stories}
        </p>
        <StoryItem  stories={this.state.stories}/>
      </div>
    );
  }
}

export default App;
