import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import child components to parent component
import {TodoBanner} from './TodoBanner'
import {TodoRow} from './TodoRow'
import {TodoCreator} from './TodoCreator'

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
        // newItemText : " "
      }
    }

    updateNewTextValue =(event) => {
      this.setState({ newItemText : event.target.value })
    }

    createNewTodo =(task) => {
      if (!this.state.todoItems
                .find(item => item.action === task)) {
                  this.setState({
                    // spread period
                    todoItems : [...this.state.todoItems,
                                  {action: task,
                                    done: false}],
                                    // newItemText : ""
                  });
                }
    }

    /*
    changeStateData =() => {
      this.setState(
        { userName: this.state.userName == "Sina" ? "Alex" : "Sina" }
      )
    }
    */

    toggleTodo = (todo) => this.setState({
      todoItems : this.state.todoItems.map(
        item => item.action === todo.action ? { ...item, done: !item.done} : item )
      });

      todoTableRows =() => this.state.todoItems.map(
        item => 
        <TodoRow key={item.action} item={item}
        callback={this.toggleTodo}/>
      );

  render =() =>
    <div>
      
      <TodoBanner name={this.state.userName}
                  tasks={this.state.todoItems}/>

      <div className="container-fluid">
        
        <TodoCreator callback={this.createNewTodo}/>
        
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