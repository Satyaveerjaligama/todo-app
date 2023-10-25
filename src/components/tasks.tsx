import { useState } from 'react';
import {Box, Grid, Button} from "@mui/material";
import SingleTaskCard from "./singleTaskCard";
import AddTaskModal from "./addTaskModal";
import { sampleData, taskObjectProps } from '../utils/contants';

const Tasks = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const [allTask, setAllTask] = useState<taskObjectProps[]>(sampleData);
    const [modalType, setModalType] = useState<string>("add");
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

    const handleAddBtnClick = () => {
        handleModalClose();
        setAllTask([...allTask, taskDetails]);
    }

    const editTaskDetails = (index: number) => {
        setTaskDetails(allTask[index]);
        setModalType("edit");
        handleModalOpen();
    }

    return (
        <Box className="tasksBox">
            <Grid container>
            {allTask.map((item, index) => 
                <Grid item xs={12} sm={6} md={4}>
                    <SingleTaskCard
                        taskDetails={item}
                        index={index}
                        editTaskDetails={editTaskDetails}
                    />
                </Grid>
            )}
            </Grid>
            <Button
                className="addTaskBtn"
                variant="contained"
                onClick={()=>{
                    setTaskDetails(emptyObject)
                    setModalType("add")
                    handleModalOpen()
                }}
            >
                + Add Task
            </Button>
            <AddTaskModal
                open = {openModal}
                handleClose = {handleModalClose}
                taskObject={taskDetails}
                modalType={modalType}
                taskDetailsOnChange={taskDetailsOnChange}
                handleAddBtnClick={handleAddBtnClick}
            />
        </Box>
    )
}

export default Tasks;