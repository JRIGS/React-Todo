import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoEntries: [
        {
          task: 'Click tasks to mark completed',
          id: null, //will be replaced by Date.now()
          completed: false, //default to false we can toggle later
        },
      ],

      todoEntry: {
        task: null,
        id: null,
        completed: null
      }
    }
  }
  addTodoEntry = (e) => {
    e.preventDefault();
    const todoEntries = this.state.todoEntries.slice();
    const todoEntry = {
      task: this.state.todoEntry.task,
      id: Date.now(),
      completed: false,
    }
    const todoEntryBlank = {
      task: null,
      id: null,
      completed: false,
    }
    todoEntries.push(todoEntry);
    this.setState({todoEntries: todoEntries, todoEntry: todoEntryBlank});
  }

  addToDoHandler = event => {
    console.log(event.target.name);

    this.setState({todoEntry: {
      task: event.target.value,
      id: Date.now(),
      completed: false
    }})
  }



  render() {
    return (
      <div>
        <h1>To-Do App</h1>
        <h2>Add task below</h2>
        <TodoForm />
        <h2>List of Todo Tasks</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
