import { AppBar, Avatar, Grid, TextField, InputAdornment, Button } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { updatePage } from "../store/slice/centralDataSlice";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const navigationList = ['Dashboard', 'All', 'Completed', 'Pending'];
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    return (
        <AppBar className="topBar">
            <Grid container className="topBar-container">
                <Grid item sx={{display: "flex", flexDirection: "row"}}>
                    {navigationList.map((listItem)=>
                        <Button
                            key={listItem}
                            className="text-primary nav-bar-options"
                            onClick={()=> {
                                navigate(`/${listItem}`);
                                dispatch(updatePage(listItem));
                            }}
                        >
                            {listItem}
                        </Button>
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