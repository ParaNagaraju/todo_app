import React from "react";

const Todolist = ({ todolist, deleteTodos, editTodos }) => {
  return (
    <div className="text1">
      
      {todolist.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo}&nbsp;{" "}
          
            <button value="submit" onClick={() => deleteTodos(index)}>
              Delete
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="edit" onClick={() => editTodos(index)}>
              Edit
            </button>{" "}
          </h5>
       
        </div>
      ))}
    </div>
  );
};

export default Todolist;
