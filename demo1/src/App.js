import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';

//Adding Dynaimc Data to our App

export default class App extends Component {
  render() {

    constructor(props)
    {
      super(props);
      this.state = {
        userName : "Sina"
      }
    }
    return(
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        { this.state.userName } iOS/React Develoer
      </h4>
    </div>
    )
  };
}