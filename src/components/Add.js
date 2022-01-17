import React from 'react'
import {InputGroup, FormControl, button} from 'react-bootstrap';

function Add() {
    return (
        <div>
            <h1> TODO APP</h1>
           
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    
  </InputGroup> 
  <button>Add</button>

        </div>
    )
}

export default Add
