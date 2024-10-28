import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';
import classes from './Task.module.css'
import { useRef } from 'react';
export default function Task() {
    const CreateTaskRef = useRef();
    function handleOpenCreateTask() {
        CreateTaskRef.current.open();
    }
    return (
        <>
            {/* <div className={classes.creatTask_container}> */}
            <div className={classes.create_task} onClick={handleOpenCreateTask}>
                <p>Create new task</p>
                <CreateTaskModal ref={CreateTaskRef} />
            </div>
            {/* </div> */}
        </>
    )
}