import { BaseSyntheticEvent, useState } from 'react';
import {Box, Grid, Button} from "@mui/material";
import SingleTaskCard from "./singleTaskCard";
import AddTaskModal from "./addTaskModal";
import { modalTypeEnum, sampleData, taskObjectProps, taskStatusEnum } from '../utils/contants';

const Tasks = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const [allTask, setAllTask] = useState<taskObjectProps[]>(sampleData);
    const [modalType, setModalType] = useState<string>(modalTypeEnum.add);
    const [activeElementIndex, setActiveElementIndex] = useState<number>(0);
    const [taskDetails, setTaskDetails] = useState<taskObjectProps>({
        taskTitle: "",
        taskDescription: "",
        taskStatus: taskStatusEnum.pending,
        taskDate: "",
    });

    const emptyObject: taskObjectProps = {
        taskTitle: "",
        taskDescription: "",
        taskStatus: taskStatusEnum.pending,
        taskDate: "",
    }

    const taskDetailsOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, type: string, index: number) => {
        if (type === modalTypeEnum.add) {
            setTaskDetails({...taskDetails, [field]: event.target.value});
        } else {
            const allTaskCopy = [...allTask];
            allTaskCopy[index] = {...allTaskCopy[index], [field]: event.target.value}
            setAllTask(allTaskCopy);
        } 
    }

    const handleAddBtnClick = () => {
        handleModalClose();
        setAllTask([...allTask, taskDetails]);
    }

    const editTaskDetails = (index: number) => {
        setTaskDetails(allTask[index]);
        setModalType(modalTypeEnum.edit);
        setActiveElementIndex(index);
        handleModalOpen();
    }

    const deleteTask = (index: number) => {
        const allTaskCopy = [...allTask];
        allTaskCopy.splice(index, 1);
        setAllTask(allTaskCopy);
    }

    const handleCheckboxChange = (event: BaseSyntheticEvent, index: number) => {
        const allTaskCopy = [...allTask];
        if (event.target.checked) {
            allTaskCopy[index] = {...allTaskCopy[index], taskStatus: taskStatusEnum.completed};
        } else {
            allTaskCopy[index] = {...allTaskCopy[index], taskStatus: taskStatusEnum.pending};
        }
        setAllTask(allTaskCopy);
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
                        deleteTask={deleteTask}
                    />
                </Grid>
            )}
            </Grid>
            <Button
                className="addTaskBtn"
                variant="contained"
                onClick={()=>{
                    setTaskDetails(emptyObject)
                    setModalType(modalTypeEnum.add)
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
                handleCheckboxChange={handleCheckboxChange}
                index={activeElementIndex}
            />
        </Box>
    )
}

export default Tasks;