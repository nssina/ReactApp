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
        todoItems : [
          { action : "Buy a flower", done: false},
          { action : "Do Workout", done: true},
          { action : "Study Programming", done: false},
          { action : "My friend", done: true}
        ],
        newItemText : " "
      }
    }

    updateNewTextValue =(event) => {
      this.setState({ newItemText : event.target.value })
    }

    createNewTodo =() => {
      if (!this.state.todoItems
                .find(item => item.action === this.state.newItemText)) {
                  this.setState({
                    // spread period
                    todoItems : [...this.state.todoItems,
                                  {action: this.state.newItemText,
                                    done: false}],
                                    newItemText : ""
                  });
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
        { this.state.userName }'s Todo List
        ({this.state.todoItems.filter(t=>!t.done).length}) items todo
      </h4>

      <div className="container-fludi">
        <div className="m-1">
          <input className="form-control"
                  value = {this.state.newItemText}
                  onChange={this.updateNewTextValue} />

                  <button className="btn btn-danger mt-1"
                          onClick={this.createNewTodo}>
                            Add New Task
                  </button>
        </div>
      </div>
    </div>
  }