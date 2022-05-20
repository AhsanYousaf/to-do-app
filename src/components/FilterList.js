import './ShowList.css';
import ShowList from './ShowList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";



function FilterList({ filter }){

const taskList = useSelector( state => state.taskList );
let List;
const [tasks, setTasks] = useState([]);
const dispatch = useDispatch();

useEffect(() => {
    
        List = ((taskList.filter((task) => {
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
        
        setTasks(List);   

    }, [filter, taskList, tasks] );


   

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
