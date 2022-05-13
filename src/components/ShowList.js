import './ShowList.css';


function ShowList({ taskList, setTaskList , setStatus, pending, inProgress, done, status}){

    

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
            {
                taskList.map((task) => {
                    if (pending === true && inProgress === true && done === true){
                        if (task.currentStatus === "Pending" || "In Progress" || "Done"){
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
                    )}}

                    else if (pending === true && inProgress === true && done === false){
                        if (task.currentStatus !== "Done"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else if (pending === true && inProgress === false && done === true){
                        if (task.currentStatus !== "In Progress"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else if (pending === false && inProgress === true && done === true){
                        if (task.currentStatus !== "Pending"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else if (pending === true && inProgress === false && done === false){
                        if (task.currentStatus === "Pending"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else if (pending === false && inProgress === true && done === false){
                        if (task.currentStatus === "In Progress"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else if (pending === false && inProgress === false && done === true){
                        if (task.currentStatus === "Done"){
                    return(
                    <div>
                        <div key={task.key} className='Task-List'>
                            <p>{task.currentTask}</p>
                            <p>{task.currentStatus}</p>
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.taskId)}>x</button>
                        </div>
                    </div>
                    )}}

                    else {
                    return(
                    <div>
                        
                    </div>
                    )}

                })
            }
        </div>
       );

}

export default ShowList;
