import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
  return (
    <div className='Todo'>
      <p>Go to School</p>
    <div>
      <FontAwesomeIcon icon={faPenSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
    </div>
  )
}

export default Todo
