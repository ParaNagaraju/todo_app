import React, { useState } from 'react'
import Todolist from './Todolist';

function App() {   
  const [task,setTask]= useState("");
  const[todos,setTodos]=useState([]);

  const changeHandler=e=>{
    setTask(e.target.value)
  }
  if(editinex){
    const editTodo=todos.find((index)=>index.id)
  }
 

  const submitHandler= e => {
    e.preventDefault();
    const newTodos=[ ...todos,task ]
    setTodos(newTodos);
    setTask("");
  }

  const deleteHandler=(indexvalue )=>{
 const newTodos=todos.filter((todos,index)=>index!==indexvalue);
 setTodos(newTodos);   
  }

  const editHandler=(indexvalue)=>{
    const newTodos=todos.find((i)=>i.index === indexvalue);
    setTodos(newTodos.todos)
  }

  return (
    <div className="App">
      <center>
      <h1>TODO App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='task'value={task} onChange={changeHandler}  ></input>&nbsp;
        <input type="submit" value= "Add" name='Add'></input>
        
      </form>
      <Todolist todolist={todos} deleteTodos={deleteHandler} editHandler={editHandler}/>
      </center>
    </div>
  );
}

export default App;
