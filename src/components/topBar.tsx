import React, { useState } from "react";
import { AppBar, Avatar, Grid, TextField, InputAdornment, Button } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { updatePage, updateSearchingString } from "../store/slice/centralDataSlice";
import { useNavigate } from "react-router-dom";
import { pageNames } from "../utils/contants";
import { capitalizeWord } from "../utils/utils";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from "./drawer";

const TopBar = () => {
    const navigationList = [pageNames.dashboard, pageNames.all, pageNames.completed, pageNames.pending];
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpenDrawer(open);
    };

    const searchFieldOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(updateSearchingString(event.target.value));
    }

    return (
        <AppBar className="topBar">
            <Grid container className="topBar-container">
                <Grid item className="navigation-options">
                    {navigationList.map((listItem)=>
                        <Button
                            key={listItem}
                            className="text-primary nav-bar-options"
                            onClick={()=> {
                                navigate(`/${listItem}`);
                                dispatch(updatePage(listItem));
                            }}
                        >
                            {capitalizeWord(listItem)}
                        </Button>
                    )}
                </Grid>
                <Grid className="hamburger" item>
                    <MenuRoundedIcon onClick={toggleDrawer(true)}/>
                    <Drawer 
                        openDrawer={openDrawer}
                        navigationOptions={navigationList}
                        toggleDrawer={toggleDrawer}
                    />
                </Grid>
                <Grid item className="search-div">
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
                        onChange={(e)=>searchFieldOnChange(e)}
                    />
                    <Avatar className="avatar">SJ</Avatar>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default TopBar;