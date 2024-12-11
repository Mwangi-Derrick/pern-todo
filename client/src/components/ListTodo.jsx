import React, { useEffect, useState } from 'react'

function ListTodo() {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data = await response.json();
            setTodos(data);
            
        } catch (error) {
            console.error(error.message)
        }  }
    console.log(todos)
    useEffect(() => { getTodos() }, [])
    
    const deleteTodos = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(todo=>todo.todo_id!==id))
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
    <table className="table-auto border-collapse border border-slate-400">
  <thead>
    <tr>
      <th className='border border-slate-300'>Todos</th>
      <th className='border border-slate-300'>Edit</th>
      <th className='border border-slate-300'>Delete</th>
    </tr>
  </thead>
          <tbody>
              {todos.map(todo=>{return <tr>
                  <td className='border border-slate-300'>{todo.description}</td>
                  <td className='border border-slate-300 '>
                      <button className='w-[80px] h-full bg-yellow-700'>Edit</button></td>
                  <td className='border border-slate-300'><button onClick={()=>{deleteTodos(todo.todo_id)}}
                      className='w-[80px] h-full bg-red-700'>Delete</button></td>
                  </tr> })    
              }
  </tbody>
</table>
  )
}

export default ListTodo