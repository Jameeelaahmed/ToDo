import { forwardRef, useRef, useImperativeHandle } from "react"
import classes from './CreateTaskModal.module.css'
import ResponsiveDateTimePickers from "../Calender/Calender"
const CreateTaskModal = forwardRef(function CreateTaskModal(_, ref) {
    const CreateTaskRef = useRef()
    useImperativeHandle(ref, () => ({
        open: () => {
            CreateTaskRef.current.showModal();
        },
        close: () => {
            CreateTaskRef.current.close();
        }
    }))
    return (
        <dialog ref={CreateTaskRef} className={classes.modal} >
            <form action="">
                <div className={classes.input}>
                    <input type="text" id="task" placeholder="Task Name" />
                </div>
                <div className={classes.btns}>
                    <button>Start Time</button>
                    <button>End Time</button>
                </div>
                <ResponsiveDateTimePickers />
                <div className={classes.buttons}>
                    <button className={classes.btn}>Create Task</button>
                </div>
            </form>
        </dialog>
    )
})

export default CreateTaskModal;