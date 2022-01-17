import React from 'react'
 
function todo({task} ) {
    return (
        <div className="tasks">
            <h2>{task.text} </h2>
            <button>done</button>
            <button>delete</button>
        </div>
    )
}

export default todo