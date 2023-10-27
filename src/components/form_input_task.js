import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add } from '../reducers/task_Slice';

function AddTask(){
    
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        dispatch(add(newTask));
        setNewTask('');
    };

    return (
        <>
        <div className="form-add-task">
            <label>Task name:</label>
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
        </>
    )
}
export default AddTask;