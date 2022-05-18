import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import FilterList from "./components/FilterList";

function App() {
    const dispatch = useDispatch();
    const [newTask,setNewTask] = useState(null);
    const [status,setStatus] = useState('Pending');
    const filter = useSelector( state =>  state.filter );


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
    
    
    
    const changePending = () => {
            dispatch({
                type: 'CHANGE_PENDING',
            });
        }
    const changeInProgress = () => {
            dispatch({
                type: 'CHANGE_IN_PROGRESS',
            });
        }
    const changeDone = () => {
            dispatch({
                type: 'CHANGE_DONE',
            });
        }




     return(
    <div className='App'>
      <div className='App-header'>
        <div className='Wrapper'>
          <h3>To do App</h3>
          <p>Filter Tasks</p>
          <input type="checkbox" value={filter.pending} onChange={(e) => changePending()}  defaultChecked />
          <label for="pending">Pending</label>
          <input type="checkbox" value={filter.inProgress} onChange={(e) => changeInProgress()} defaultChecked />
          <label for="inProgress">In Progress</label>
          <input type="checkbox" value={filter.done} onChange={(e) => changeDone()} defaultChecked />
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
            <FilterList />
        </div>
    </div>
    </div>
</div>
     );
}

export default App;
