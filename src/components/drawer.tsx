import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { capitalizeWord } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { updatePage } from '../store/slice/centralDataSlice';

/*
This component is used to show the left drawer. In mobile screens when the user click on hamburger
this left drawer will be opened
*/

interface drawerProps {
    openDrawer: boolean;
    navigationOptions: string[];
    toggleDrawer: (type: boolean) => React.ReactEventHandler;
}

export default function Drawer(props: drawerProps) {
  const {openDrawer, navigationOptions, toggleDrawer} = props;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={openDrawer}
            className="left-drawer"
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List>
                    {navigationOptions.map((listItem, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton 
                            className="drawer-options" onClick={()=> {
                                navigate(`/${listItem}`);
                                dispatch(updatePage(listItem));
                            }}
                        >
                            <ListItemText primary={capitalizeWord(listItem)} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
