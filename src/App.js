import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import FilterList from "./components/FilterList";

function App() {
    const dispatch = useDispatch();
    const [newTask,setNewTask] = useState(null);
    const [status,setStatus] = useState('Pending');

    const [filter,setFilter] = useState({
        pending: true,
        inProgress: true,
        done: true
    })


    const addTask = () => { 
        dispatch({
        type: 'ADD_TO_LIST',
        payload: {
            title: newTask,
            id: Date.now(),
            status: status
        }
    });
    setNewTask('');
    }
    

     return(
    <div className='App'>
      <div className='App-header'>
        <div className='Wrapper'>
          <h3>To do App</h3>
          <p>Filter Tasks</p>
          <input type="checkbox" value={filter.pending} onChange={(e) => setFilter( {...filter,  pending: !filter.pending } )}  defaultChecked />
          <label for="pending">Pending</label>
          <input type="checkbox" value={filter.inProgress} onChange={(e) => setFilter( {...filter,  inProgress: !filter.inProgress } )} defaultChecked />
          <label for="inProgress">In Progress</label>
          <input type="checkbox" value={filter.done} onChange={(e) => setFilter( {...filter,  done: !filter.done } )} defaultChecked />
          <label for="done">Done</label>
          <p>Add New Task</p>
        <div className='Input-wrapper'>
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add Task" />
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={addTask} disabled={!newTask} >+</button>
        </div>
        <div>
            <FilterList filter={filter} />
        </div>
    </div>
    </div>
</div>
     );
}

export default App;
