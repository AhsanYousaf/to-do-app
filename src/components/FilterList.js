import './ShowList.css';
import ShowList from './ShowList';
import { useSelector } from "react-redux";


function FilterList(){

const taskList = useSelector( state => state.taskList );
const filter = useSelector( state =>  state.filter );

const pending = filter.pending;
const inProgress = filter.inProgress;
const done = filter.done;
   



   

       return(
           <div>
            {
                taskList.map((task) => { 
                    if (pending === true && inProgress === true && done === true){
                        if (task.status === "Pending" || "In Progress" || "Done"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === true && inProgress === true && done === false){
                        if (task.status !== "Done"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === true && inProgress === false && done === true){
                        if (task.status !== "In Progress"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === false && inProgress === true && done === true){
                        if (task.status !== "Pending"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === true && inProgress === false && done === false){
                        if (task.status === "Pending"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === false && inProgress === true && done === false){
                        if (task.status === "In Progress"){
                            return(<ShowList task={task}/>);
                    }}

                    else if (pending === false && inProgress === false && done === true){
                        if (task.status === "Done"){
                            return(<ShowList task={task}/>);
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
