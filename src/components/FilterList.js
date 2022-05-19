import './ShowList.css';
import ShowList from './ShowList';
import { useSelector } from "react-redux";


function FilterList({ filter }){

const taskList = useSelector( state => state.taskList );

const pending = filter.pending;
const inProgress = filter.inProgress;
const done = filter.done;
   



   

       return(
           <div>
            {
                taskList.map((task) => {

                    if (pending && task.status === "Pending"){
                            return(<ShowList task={task}/>);
                    }

                    if (inProgress && task.status === "In Progress"){
                            return(<ShowList task={task}/>);
                    }

                    if (done && task.status === "Done"){
                            return(<ShowList task={task}/>);
                    }
            })
        }
        </div>
       );  
}

export default FilterList;
