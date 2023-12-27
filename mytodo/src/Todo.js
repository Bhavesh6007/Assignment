import React from "react";
import { useState } from "react";
import './Todo.css'
function Todo(){

    const [inputTask,setInputTask]=useState("");
    const [list, setList]=useState([]);
       
    const handleAddTodo =(todo) =>{
        const newTask ={
            id:Math.random(),
            todo: todo
        };
        setList([...list, newTask]);
        setInputTask('')
    };
    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => 
            todo.id !== id
       );
    
        setList(newList); 
    };
    const handleInputChange =(event)=>{
        setInputTask(event.target.value);
    };

    return(
        <>
        <div className="Todo">
        <h1>To Do List</h1>
        <input className="input" type="text" value={inputTask}
            onChange={handleInputChange} placeholder="Enter a Task"/>
            <button className="btn" onClick={()=>handleAddTodo(inputTask)}>ADD</button>
            </div>
            <ul>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Todo;

