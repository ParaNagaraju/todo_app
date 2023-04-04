import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);

    setTask("");
  };

  const deleteHandler = (indexvalue) => {
    const neTodos = todos.filter((made, index) => index !== indexvalue);
    setTodos(neTodos);
  };

  const editHandler = (indexvalue) => {
    setTask(todos[indexvalue]);
    deleteHandler (indexvalue);
    // setEdit(indexvalue);
  };

  return (
    <div className="App">
      <center>
        <h1>TODO App</h1>
        <form onSubmit={submitHandler}>
          <div className="row">
          <input className="text"
            type="text"
            name="task"
            value={task}
            onChange={changeHandler}
          ></input>
          &nbsp;
          <input type="submit" value="Add" name="Add"></input> 
          </div>
        </form>
        <Todolist
          todolist={todos}
          deleteTodos={deleteHandler}
          editTodos={editHandler}
        />
      </center>
    </div>
  );
}

export default App;
