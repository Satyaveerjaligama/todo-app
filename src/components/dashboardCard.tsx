import { Card, Typography } from "@mui/material";

interface dashBoardCardProps {
    type: string,
    value: number,
}

const DashBoardCard = (props: dashBoardCardProps) => {
    const {type, value} = props
    return (
        <Card className="dashboardCard">
            <Typography>{type}</Typography>
            <Typography>{value}</Typography>
        </Card>
    )
}

export default DashBoardCard;