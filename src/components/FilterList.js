import './ShowList.css';
import ShowList from './ShowList';


function FilterList({ taskList, setTaskList , pending, inProgress, done}){

    

   

       return(
           <div>
            {
                taskList.map((task) => {
                    if (pending === true && inProgress === true && done === true){
                        if (task.currentStatus === "Pending" || "In Progress" || "Done"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === true && inProgress === true && done === false){
                        if (task.currentStatus !== "Done"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === true && inProgress === false && done === true){
                        if (task.currentStatus !== "In Progress"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === false && inProgress === true && done === true){
                        if (task.currentStatus !== "Pending"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === true && inProgress === false && done === false){
                        if (task.currentStatus === "Pending"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === false && inProgress === true && done === false){
                        if (task.currentStatus === "In Progress"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

                    else if (pending === false && inProgress === false && done === true){
                        if (task.currentStatus === "Done"){
                            return(<ShowList task={task} taskList={taskList} setTaskList={setTaskList}/>);
                    }}

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

export default FilterList;
