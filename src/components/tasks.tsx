import { useState } from 'react';
import {Box, Grid, Button} from "@mui/material";
import SingleTaskCard from "./singleTaskCard";
import AddTaskModal from "./addTaskModal";
import { taskObjectProps } from '../utils/contants';

const Tasks = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const [taskDetails, setTaskDetails] = useState<taskObjectProps>({
        taskTitle: "",
        taskDescription: "",
        taskStatus: "pending",
        taskDate: "",
    });

    const emptyObject: taskObjectProps = {
        taskTitle: "",
        taskDescription: "",
        taskStatus: "pending",
        taskDate: "",
    }

    const taskDetailsOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setTaskDetails({...taskDetails, [field]: event.target.value});
    }

    const list = [1,2,3,4,5,6,7]
    return (
        <Box className="tasksBox">
            <Grid container>
            {list.map((index) => 
                <Grid item xs={12} sm={6} md={4}>
                    <SingleTaskCard key={index}/>
                </Grid>
            )}
            </Grid>
            <Button
                className="addTaskBtn"
                variant="contained"
                onClick={()=>{
                    setTaskDetails(emptyObject)
                    handleModalOpen()
                }}
            >
                + Add Task
            </Button>
            <AddTaskModal
                open = {openModal}
                handleClose = {handleModalClose}
                taskObject={taskDetails}
                taskDetailsOnChange={taskDetailsOnChange}
            />
        </Box>
    )
}

export default Tasks;