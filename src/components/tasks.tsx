import {Box, Grid} from "@mui/material";
import SingleTaskCard from "./singleTaskCard";

const Tasks = () => {

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
        </Box>
    )
}

export default Tasks;