import { useState,useRef} from 'react';
import './App.css';


function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  const first = useRef()
  const deleteTodo = (id)=>{
    setTodos(todos.filter((value)=>value.id!==id))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input ref={first} value={todo} onChange={(e)=>{setTodo(e.target.value)}}
           type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setTodos([...todos,{id:Date.now(),text:todo,status:false}]); first.current.focus();
          setTodo('') }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {todos.map((value)=>{
        return(<div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            setTodos(todos.filter(obj2=>{
              console.log(obj2);
              if(obj2.id===value.id){obj2.status=e.target.checked}
              return obj2
            }))
          }} checked={value.status} type="checkbox" name="" id="" />
        <p>{value.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times" onClick={()=>deleteTodo(value.id)}></i>
        </div>
      </div>)
       }) 
       }
      </div>
    </div>
  );
}

export default App;
