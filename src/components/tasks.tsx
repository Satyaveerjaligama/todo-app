import { BaseSyntheticEvent, useState } from 'react';
import {Box, Grid, Button} from "@mui/material";
import SingleTaskCard from "./singleTaskCard";
import AddTaskModal from "./addTaskModal";
import { modalTypeEnum, taskObjectProps, taskStatusEnum } from '../utils/contants';
import { Dayjs } from 'dayjs';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store';
import { storeTaskList } from '../store/slice/centralDataSlice';


const Tasks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const page: string = useSelector((state: RootState)=> state.centralDataSlice.page);
    const searchingString: string = useSelector((state: RootState)=> state.centralDataSlice.searchingString);
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const [allTask, setAllTask] = useState<taskObjectProps[]>(useSelector((state: RootState)=>state.centralDataSlice.taskList));
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

    const taskDetailsOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, type: string) => {
        if (type === modalTypeEnum.add) {
            setTaskDetails({...taskDetails, [field]: event.target.value});
        } else {
            setTaskDetails({...taskDetails, [field]: event.target.value});
        } 
    }

    const handleAddBtnClick = () => {
        handleModalClose();
        setAllTask([...allTask, taskDetails]);
        dispatch(storeTaskList([...allTask, taskDetails]));
    }

    const handleSaveChangesClick = (index: number) => {
        handleModalClose();
        const allTaskCopy = [...allTask];
        allTaskCopy[index] = taskDetails;
        setAllTask(allTaskCopy);
        dispatch(storeTaskList(allTaskCopy));
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
        dispatch(storeTaskList(allTaskCopy));
    }

    const handleCheckboxChange = (event: BaseSyntheticEvent) => {
        if (event.target.checked) {
            setTaskDetails({...taskDetails, taskStatus: taskStatusEnum.completed});
        } else {
            setTaskDetails({...taskDetails, taskStatus: taskStatusEnum.pending});
        }
    }

    const dateOnChange = (event: Dayjs | null) => {
        if (event?.format("DD-MM-YYYY") !== "Invalid Date") {
            setTaskDetails({...taskDetails, taskDate: event?.format("DD-MM-YYYY") as string});
        }
    }

    return (
        <Box className="tasksBox">
            <Grid container>
            {allTask.map((item, index) =>
                ((page == item.taskStatus || page==="all") && (searchingString === "" || (item.taskTitle.toLowerCase()).includes(searchingString.toLowerCase())) ?
                    (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <SingleTaskCard
                            taskDetails={item}
                            index={index}
                            editTaskDetails={editTaskDetails}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                    ) 
                    : ""
                )
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
                handleSaveChangesClick={handleSaveChangesClick}
                dateOnChange={dateOnChange}
            />
        </Box>
    )
}

export default Tasks;