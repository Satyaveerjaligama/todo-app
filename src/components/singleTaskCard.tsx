import {Card, Typography} from "@mui/material"

const SingleTaskCard = () => {
    return (
        <Card className="singleTaskCard">
            <Typography className="taskSubject">Sample</Typography>
            <Typography className="taskStatus">Status</Typography>
            <Typography className="taskDate">Date</Typography>
            <Typography className="taskIcons">Icons</Typography>
        </Card>
    )
}

export default SingleTaskCard;