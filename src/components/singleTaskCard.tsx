import {Box, Card, Typography} from "@mui/material"
import { taskObjectProps, taskStatusEnum } from "../utils/contants";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';

interface singleTaskCardProps {
    taskDetails: taskObjectProps,
    index: number,
    editTaskDetails: (index: number) => void,
    deleteTask: (index: number) => void,
}

const SingleTaskCard = (props: singleTaskCardProps) => {
    const {taskDetails, index, editTaskDetails, deleteTask} = props;
    return (
        <Card className="singleTaskCard">
            <Typography className="taskSubject">{taskDetails.taskTitle}</Typography>
            <Typography className="taskDate">{taskDetails.taskDate}</Typography>
            <Box className="editDeleteBox">
                <ModeEditOutlineRoundedIcon onClick={()=>editTaskDetails(index)}/>
                <DeleteRoundedIcon onClick={()=>deleteTask(index)}/>
            </Box>
            { taskDetails.taskStatus === taskStatusEnum.completed && (
            <Box>
                <DomainVerificationRoundedIcon className="completedIcon"/>
            </Box>
            )}
            
        </Card>
    )
}

export default SingleTaskCard;