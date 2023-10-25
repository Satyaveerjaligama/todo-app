import { AppBar, Typography, Avatar, Grid, TextField, InputAdornment } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const TopBar = () => {
    return (
        <AppBar className="topBar">
            <Grid container className="topBar-container">
                <Grid item>
                    <Typography>To Do</Typography>
                </Grid>
                <Grid item>
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
                </Grid>
                <Grid item>
                    <Avatar>SJ</Avatar>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default TopBar;