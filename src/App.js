import React from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Post from "./components/Post";
import {BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  
  //showPost = (postID) => ()
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}