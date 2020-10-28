import React from 'react'
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.todoEntries.map(todoEntry => {
                return(
                    <Todo 
                    todoEntryTask = {todoEntry.task}
                    todoEntryId = {todoEntry.id}
                    todoEntryCompleted = {todoEntry.completed}
                    key = {todoEntry.id}
                    todoCompletedToggle = {props.todoCompletedToggle}
                    />
                )
            })}
        </div>
    )
}

TodoList.propTypes = {

}

export default TodoList
