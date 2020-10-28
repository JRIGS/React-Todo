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
