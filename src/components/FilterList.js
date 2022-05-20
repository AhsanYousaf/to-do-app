import './ShowList.css';
import ShowList from './ShowList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";



function FilterList({ filter }){

const taskList = useSelector( state => state.taskList );
const updatedList = useSelector( state => state.updatedList );
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
        dispatch({
            type: 'UPDATED_LIST',
            payload: tasks,
        });         
    }, [filter, taskList, tasks] );


   

return(
    <div>
        {
            updatedList.map((task) => {
                return <ShowList task={task} />
            })
        }
    </div>
    );

}

export default FilterList;
