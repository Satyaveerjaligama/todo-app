import { AppBar, Typography, Avatar, Grid, TextField, InputAdornment } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const TopBar = () => {
    const navigationList = ['Dashboard', 'All', 'Completed', 'Pending'];
    return (
        <AppBar className="topBar">
            <Grid container className="topBar-container">
                <Grid item sx={{display: "flex", flexDirection: "row"}}>
                    {navigationList.map((listItem)=>
                    <a href={`#${listItem}`} className="nav-bar-options text-decoration-none">
                        <Typography className="text-primary" p={1} ml={3}>
                            {listItem}
                        </Typography>
                    </a>
                    )}
                </Grid>
                <Grid item sx={{display: "flex", flexDirection: "row"}}>
                    <TextField 
                        label="Search"
                        className="search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchRounded />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Avatar>SJ</Avatar>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default TopBar;