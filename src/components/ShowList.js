import './ShowList.css';
import { useDispatch } from "react-redux";


function ShowList({ task }){

    const dispatch = useDispatch();

    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id,
        });
    }

    const updateStatus = (key, e) => {
        dispatch({
            type: "DELETE_TASK",
            payload: key.id,
        });
        dispatch({
            type: 'UPDATE_STATUS',
            payload: {
                obj: key,
                value: e.target.value
            }
        });
    }


                    return(
                        <div>
                        <div key={task.id} className='Task-List'>
                            <p>{task.title}</p>
                            <p>{task.status}</p>
                            <select onChange={(e) => updateStatus(task,e)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Process</option>
                                <option value="Done">Done</option>
                            </select>
                            <button onClick={() => deleteTask(task.id)}>x</button>
                        </div>
                    </div>
                    );

    
}

    

   
export default ShowList;
