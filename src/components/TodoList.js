import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4()

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
      if (todo !== '') {
      setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
      }

      else {
        alert('Please Add a Task')
      }

      console.log(todos)

    }

  return (
    <div className='TodoList'>
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  )
}

export default TodoList;
