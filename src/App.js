import React from 'react';
import './App.css';
import {useState} from 'react';
import ShowList from './components/ShowList'

function App() {

  const [tasks,setTasks] = useState(null);
  const [status,setStatus] = useState('Pending');
  const [pending,setPending] = useState(true);
  const [inProgress,setInProgress] = useState(true);
  const [done,setDone] = useState(true);
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
          <input type="checkbox" id="pending" name="pending" value={pending} onChange={(e) => setPending(!pending)} defaultChecked />
          <label for="pending">Pending</label>
          <input type="checkbox" id="inProgress" name="inProcess" value={inProgress} onChange={(e) => setInProgress(!inProgress)} defaultChecked />
          <label for="inProgress">In Process</label>
          <input type="checkbox" id="done" name="done" value={done} onChange={(e) => setDone(!done)} defaultChecked />
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
          <ShowList 
          taskList={taskList} 
          setTaskList={setTaskList} 
          setStatus={setStatus}
          pending={pending}
          inProgress={inProgress}
          done={done}
          currentStatus={status}
          status={status} />
        </div>
    </div>
      </div>
    </div>
  );
}

export default App;
