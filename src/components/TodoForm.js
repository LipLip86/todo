import React, {useState} from 'react'

const TodoForm = ({addtoDo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault(value);

    addtoDo(value);

    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" className='todoinput' value={value}
    placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'> Add Task

    </button>

    </form>
  )
}

export default TodoForm;
