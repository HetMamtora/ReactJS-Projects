import React from 'react'
import { useState } from 'react'
import './todo.css'
//box-shadow: 5px 5px 20px rgba(51,51,51,0.8),-5px -5px 20px rgba(51,51,51,0.8);
const Todo = () => {

    const [todos,setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editMode,setEditMode] = useState(false);
    const [editId,setEditId] = useState(null);
    const [editValue,setEditValue] = useState('');

    const addTodo = () => {
        if(inputValue.trim() !== ''){
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }

            setTodos([...todos,newTodo]);
            setInputValue('');
        }
    }

    const deleteTodo = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos)
    }

    const enterEditMode = (id,text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);
    }

    const updateTodo = () => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === editId){
                return {...todo,text:editValue};
            }
            return todo;
        });

        setTodos(updatedTodos);
        setEditMode(false);
        setEditId(null);
        setEditValue('');
    }

  return (
    <div className='todo-container'>
        <h2>ToDo List</h2>
        <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>

        {
            editMode ? (
                <div>
                    <input type='text' value={editValue} onChange={(e)=> setEditValue(e.target.value)} />
                    <center><button onClick={updateTodo}>Update</button></center>
                </div>
            ):(
                <button onClick={addTodo}>Add</button>
            )
        }

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <p>{todo.text}</p>
                    <div>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button> <span></span>
                        <button onClick={() => enterEditMode(todo.id, todo.text)}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
        
        <center><span>Made with &#129505;&nbsp;&#169; Het Mamtora</span></center>
    </div>
  )
}

export default Todo