import React, { useState } from 'react'

function InputTodo() {
    const [description, setDescription] = useState("");
    const onSubmitForm = async () => {
        try {
            const body = { description }
            const response= await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
      <div className='flex items-center justify-center w-full h-fit'>
          <div className='border-solid border-l-2 rounded-l-md border-y-2 border-y-blue-500 border-l-blue-500
          flex items-center px-2 h-10 w-[300px]'>
              <input type='text' className='outline-none w-full'
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                  placeholder='Enter a todo' />
          </div> 
          <button onClick={()=>{onSubmitForm()}} className='rounded-r-md w-[100px] h-10 flex items-center justify-center
          border-solid border-2 bg-blue-500 border-blue-500'>
              Add
          </button>
    </div>
  )
}

export default InputTodo