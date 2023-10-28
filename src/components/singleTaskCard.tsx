import {Box, Card, Typography} from "@mui/material"
import { taskObjectProps, taskStatusEnum } from "../utils/contants";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { convertDateToDisplay } from "../utils/utils";

interface singleTaskCardProps {
    taskDetails: taskObjectProps,
    index: number,
    editTaskDetails: (index: number) => void,
    deleteTask: (index: number) => void,
}

const SingleTaskCard = (props: singleTaskCardProps) => {
    const {taskDetails, index, editTaskDetails, deleteTask} = props;
    return (
        <Card className={`singleTaskCard ${taskDetails.taskStatus === taskStatusEnum.completed ? "border-left-green" : "border-left-red"}`}>
            <Typography className="taskSubject">{taskDetails.taskTitle}</Typography>
            <Typography className={`taskDate ${taskDetails.taskStatus === taskStatusEnum.completed ? "background-color-light-green" : "background-color-light-red"}`}>
                {`${convertDateToDisplay(taskDetails.taskDate)}`}
            </Typography>
            <Box className="editDeleteBox">
                <ModeEditOutlineRoundedIcon onClick={()=>editTaskDetails(index)}/>
                <DeleteRoundedIcon onClick={()=>deleteTask(index)}/>
            </Box>
        </Card>
    )
}

export default SingleTaskCard;