import {Box, Card, Typography} from "@mui/material"
import { taskObjectProps } from "../utils/contants";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

interface singleTaskCardProps {
    taskDetails: taskObjectProps,
    index: number,
    editTaskDetails: (index: number) => void,
}

const SingleTaskCard = (props: singleTaskCardProps) => {
    const {taskDetails, index, editTaskDetails} = props;
    return (
        <Card className="singleTaskCard">
            <Typography className="taskSubject">{taskDetails.taskTitle}</Typography>
            <Typography className="taskStatus">{taskDetails.taskStatus}</Typography>
            <Typography className="taskDate">{taskDetails.taskDate}</Typography>
            <Box className="editDeleteBox">
                <ModeEditOutlineRoundedIcon onClick={()=>editTaskDetails(index)}/>
                <DeleteRoundedIcon />
            </Box>
        </Card>
    )
}

export default SingleTaskCard;