import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Adding Dynaimc Data to our react app

export default class App extends Component {

  constructor(props)
    {
      super(props);
      this.state = {
        userName : "Sina",
        course : "iOS/Web Developer"
      }
    }

    changeStateData =() => {
      this.setState(
        { userName: this.state.userName == "Sina" ? "Alex" : "Sina" }
      )
    }


  render =() =>
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        { this.state.userName } Course
        <button className="btn btn-danger m-2"
                onClick={ this.changeStateData }>
                  Change the State
        </button>
      </h4>
    </div>
  }