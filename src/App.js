
import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'


function App() {
const [inputvalue, setInputvalue] =useState()
const [todolist, setTodolist] =useState([])


const getvaluee = () =>{ 
  setTodolist(prevtodolist => [...prevtodolist, {id:uuidv4(), todo:inputvalue , completed:false}])
  setInputvalue('')
}

const handleCheckboxChange = (id) =>{ 
  setTodolist(prevtodolist => prevtodolist.map(todoitem => todoitem.id === id ? {...todoitem, completed:!todoitem.completed} : todoitem))
}

const deleteitem = (id) =>{ 
  setTodolist(prevtodolist => prevtodolist.filter(todoitem => todoitem.id !== id ))
}

useEffect(()=> console.log(todolist), [todolist])

  return (
    <div className="App">
     <input 
     onChange={(e)=>setInputvalue(e.target.value)}
     value={inputvalue}
      >

     </input>
    <button onClick={getvaluee} >Add Todo</button>
    <ul>
        {todolist.map((todoitem) => (
          <li key={todoitem.id} >
            <input
          type="checkbox"
        value={todoitem.completed}
          onChange={()=> handleCheckboxChange(todoitem.id)}
        />
           <span className={todoitem.completed ? 'completed' : ''}>{todoitem.todo}</span>
           <button onClick={()=> deleteitem(todoitem.id)}>Delete</button>
           <button>edit</button>
           <button onClick={()=> saveitem(todoitem.id)}>save</button>
            </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
