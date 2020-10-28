import React from 'react'

const Todo = props => {
    return (
        <div>
            <div className = {`todoEntryCompleted${props.todoEntryCompleted}`}>
                <button onClick={() => props.todoCompletedToggle(props.todoEntryId)}>
                    {props.todoEntryTask}
                </button>
            </div>
        </div>
    )
}

export default Todo