import React from 'react'; 


// takes in the todo data and displays the task to the screen.


const Todo = props => {
   return (
       <div>
           <div className = {`todoEntryCompleted${props.todoEntryCompleted}`}>
               <button onClick = {() => props.todoCompletedToggle(props.todoEntryId)}>
                   {props.todoEntryTask}
               </button>
           </div>
       </div>
   );
};


export default Todo;