import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js'; 




class App extends React.Component {
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoEntries: [
        {
          task: "Click tasks to mark as completed",   // the todo title that will be shown to the user.
          id: "1",  // will be replaced by Date.now().
          completed: false //default to false so we can toggle when complete
        }, 
      ],

      todoEntry: {
        task: "",
        id:"",
        completed:""
        }
    }
  }


  addTodoEntry = (e) => {
    e.preventDefault();
    const todoEntries = this.state.todoEntries.slice(); 
    const todoEntry = {
      task: this.state.todoEntry.task, 
      id: Date.now(), 
      completed: false
    }
    const todoEntryBlank = {
      task: "",
      id:"",
      completed: false
      }
    todoEntries.push(todoEntry); 
    this.setState({todoEntries: todoEntries, todoEntry: todoEntryBlank});
  }

  addTodoHandler = event => {
    console.log(event.target.value); 

    this.setState({todoEntry: {
      task: event.target.value, 
      id: Date.now(),
      completed: false
      }})
  };



  removeCompletedTodos = () => {
    console.log("Removed")
    const todoEntriesCopy = this.state.todoEntries.slice();
    console.log(todoEntriesCopy)
    const uncompletedTodoEntries = todoEntriesCopy.filter(todoEntry => 
      todoEntry.completed === false
    )
    console.log(uncompletedTodoEntries)
    this.setState({todoEntries: uncompletedTodoEntries})
  }


  todoCompletedToggle = (todoEntryId) => {
      const todoEntriesCopy = this.state.todoEntries.slice();
      for (let i = 0; i < todoEntriesCopy.length; i++) {
        if (todoEntriesCopy[i].id === todoEntryId) {
          todoEntriesCopy[i].completed = !todoEntriesCopy[i].completed;
        }
      }
      return this.setState({todoEntries: todoEntriesCopy})
  }

  


  render() {
    return (
      <div> 
          <h1>To-do App</h1>
          <h2>Add task below</h2>
          <TodoForm 
            todoEntry = {this.state.todoEntry}
            addTodoHandler = {this.addTodoHandler}
            addTodoEntry = {this.addTodoEntry}
            removeCompletedTodos = {this.removeCompletedTodos}
          />

          <h2> List of Todo Tasks </h2>
        
          <TodoList 
            todoEntries = {this.state.todoEntries}
            todoCompletedToggle = {this.todoCompletedToggle}
          />
      </div>

    );
  }
}

export default App;
