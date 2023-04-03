import React from 'react'

const Todolist = ({todolist, deleteTodos,editHandler}) => {
  return (
    <div>
      {todolist.map((todo,index)=>
      <div key={index}>
        <h5>{todo}&nbsp; <button onClick={()=>deleteTodos(index)}>Delete</button><button onClick={()=>editHandler(index)}>Edit</button> </h5>
      </div>
      )}
    </div>
  )
}

export default Todolist
