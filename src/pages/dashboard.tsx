import { PieChart } from "@mui/x-charts";
import { Box, Grid } from "@mui/material";
import TopBar from "../components/topBar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { taskStatusEnum } from "../utils/contants";
import DashBoardCard from "../components/dashboardCard";

const Dashboard = () => {
    const taskList = useSelector((state: RootState)=>state.centralDataSlice.taskList);

    let completedTasks: number = 0;
    let pendingTasks: number = 0;
    taskList.map((task)=>{
        if(task.taskStatus === taskStatusEnum.completed) {
            completedTasks = completedTasks + 1;
        } else {
            pendingTasks = pendingTasks + 1;
        }
    })

    const cardData = [
        {
            type: "All Tasks",
            value: taskList.length
        },
        {
            type: "Completed",
            value: completedTasks
        },
        {
            type: "Pending",
            value: pendingTasks
        }
    ]

    return (
        <>
            <TopBar />
            <Box className="dashboard" sx={{paddingTop: "100px"}}>
                <Grid container>
                    {cardData.map((item)=>
                        <Grid item xs={12} sm={6} md={3}>
                            <DashBoardCard type={item.type} value={item.value}/>
                        </Grid>
                    )}
                </Grid>
                <PieChart
                    series={[
                        {
                            data:[
                                { id: 0, value: completedTasks, label: "Completed", color: "#70bc8b"},
                                { id: 1, value: pendingTasks, label: "Pending", color: "#fb654e"},
                            ],
                            innerRadius: 50,
                            outerRadius: 100,
                            paddingAngle: 2,
                            cornerRadius: 4,
                            startAngle: 0,
                            endAngle: 360,
                            cx: 150,
                            cy: 150,
                        }
                    ]}
                    width={400}
                    height={400}
                />
            </Box>
        </>
    )
}

export default Dashboard;