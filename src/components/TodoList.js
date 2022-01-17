import React from 'react'
import Todo from './Todo';

function TodoList({todo}) {
    return (
        <div>
            {
            todo.map ((el,id) => <todo task={el} id={id}/>)
            }
        </div>
    )
}

export default TodoList

