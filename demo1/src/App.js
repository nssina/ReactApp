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

    toggleTodo = (todo) => this.setState({
      todoItems : this.state.todoItems.map(
        item => item.action === todo.action ? { ...item, done: !item.done} : item )
      });

      todoTableRows =() => this.state.todoItems.map(
        item => 
        <tr key={item.action}>
          <td> {item.action} </td>
          <td> <input type="checkbox" checked={item.done}
                      onChange={ () => this.toggleTodo(item)}/>
          </td>
        </tr>
      );

  render =() =>
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        { this.state.userName } you have
        ({this.state.todoItems.filter(t=>!t.done).length}) incomplete taskes
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

        <table className="table table-strip table-bordered">
          <thead>
            <tr>
              <th> Todo Task Name </th>
              <th> Done </th>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows()}
          </tbody>
        </table>
        
      </div>
    </div>
  }