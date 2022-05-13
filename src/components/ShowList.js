import './ShowList.css';


function ShowList({ task, taskList, setTaskList }){

    const deleteTask = (key) => {
       const newTaskList = taskList.filter((task)=>{
        return task.taskId !== key;
       });
       setTaskList(newTaskList);
   }
   
   const newStatus = (key, e) => {

    const newTaskList = taskList.filter((task)=>{
        return task.taskId !== key.taskId;
       });
       setTaskList([...newTaskList, { currentTask: key.currentTask , currentStatus: e.target.value , taskId: key.taskId }]);

       }

return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => newStatus(task,e)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )

}

    

   
export default ShowList;
