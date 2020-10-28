import React from 'react'


const TodoForm = props => {
    return (
        <div>
            <form onSubmit = {props.addTodoEntry}>
                <textarea
                 placeholder = "Add Task..."
                 onChange = {props.addTodoHandler}
                 value = {props.todoEntry.task}
                 onSubmit = {props.addTodoEntry}
                >
                </textarea>
            </form>
            <div>
                <button onClick = {props.addTodoEntry}>Add Todo</button>
                <button onClick = {() => props.removeCompletedTodos()}>Clear Completed</button>
            </div>
        </div>
    )
}


export default TodoForm
