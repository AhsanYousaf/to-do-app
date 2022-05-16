import React from 'react';
import './App.css';
import {useState} from 'react';
import FilterList from './components/FilterList';

function App() {

  const [tasks,setTasks] = useState(null);
  const [status,setStatus] = useState('Pending');
  const [filter,setFilter] = useState({
    pending: true,
    inProgress: true,
    done: true
  });
  const [taskList,setTaskList] = useState([]);


  const onChangeHandler = (e) => {
    setTasks(e.target.value);  
  }

  const addTask = () => {
    setTaskList([...taskList, { currentTask: tasks , currentStatus: status , taskId: Date.now() }]);
    setTasks('');
  }
  
 

  return (
    <div className='App'>
      <div className='App-header'>
        <div className='Wrapper'>
          <h3>To do App</h3>
          <p>Filter Tasks</p>
          <input type="checkbox" id="pending" name="pending" value={filter.pending} onChange={(e) => setFilter({...filter, pending: !filter.pending})} defaultChecked />
          <label for="pending">Pending</label>
          <input type="checkbox" id="inProgress" name="inProgress" value={filter.inProgress} onChange={(e) => setFilter({...filter, inProgress: !filter.inProgress})} defaultChecked />
          <label for="inProgress">In Progress</label>
          <input type="checkbox" id="done" name="done" value={filter.done} onChange={(e) => setFilter({...filter, done: !filter.done})} defaultChecked />
          <label for="done">Done</label>
          <p>Add New Task</p>
        <div className='Input-wrapper'>
          <input value={tasks} onChange={onChangeHandler} placeholder="Add Task" />
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={addTask} disabled={!tasks} >+</button>
        </div>
        <div>
          <FilterList 
          taskList={taskList} 
          setTaskList={setTaskList} 
          filter ={filter}
           />
        </div>
    </div>
      </div>
    </div>
  );
}

export default App;
