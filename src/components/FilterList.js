import './ShowList.css';
import ShowList from './ShowList';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";



function FilterList({ filter }){

const taskList = useSelector( state => state.taskList );
const [tasks, setTasks] = useState([]);

useEffect(() => {
    
        setTasks((taskList.filter((task) => {
            if (task.status === "Pending" && filter.pending === true){
                return task;
            }
            if (task.status === "In Progress" && filter.inProgress === true){
                return task;
            }
            if (task.status === "Done" && filter.done === true){
                return task;
            }
            
        }))) 

    }, [filter, taskList] );


   

return(
    <div>
        {
            tasks.map((task) => {
                return <ShowList task={task} />
            })
        }
    </div>
    );

}

export default FilterList;
