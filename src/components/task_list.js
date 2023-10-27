import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { del } from '../reducers/task_Slice';

function Task_list(){
    const tasks = useSelector((state) => state.task.list);
    const dispatch = useDispatch();

    const handleDelete = (name) => {
        dispatch(del(name));
      };

      return (
        <>
        <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {
                tasks.map(function(task, idx){
                    return (
                        <div className="task" key={idx}>
                            <p>{task}</p>
                            <button onClick={() => handleDelete(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}
export default Task_list;