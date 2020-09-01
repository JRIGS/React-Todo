import React from 'react';

// holds your input field and your Add Todo and Clear Completed buttons.

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
                <button onClick = {props.addTodoEntry}> Add Todo </button>
                <button onClick ={() => props.removeCompletedTodos()}> Clear Completed </button>
            </div>
        </div>
    );
}

export default TodoForm;