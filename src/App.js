import './App.css';
import Add from './components/Add';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);



  return (
    <div className="App">
     <Add/>
     <TodoList todo={todo} />
    </div>
  );
}

export default App; 
