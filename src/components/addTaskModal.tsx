import { useState } from "react";
import {Modal, Box, Typography, TextField, Button, Grid, FormControlLabel, Checkbox} from "@mui/material"
import { modalTypeEnum, taskObjectProps, taskStatusEnum } from "../utils/contants";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface AddTaskModalProps {
    open: boolean;
    handleClose: () => void;
    taskObject: taskObjectProps;
    handleAddBtnClick: () => void;
    modalType: string;
    index: number;
    taskDetailsOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, type: string, index : number) => void;
    handleCheckboxChange: (event: React.BaseSyntheticEvent, index: number)=> void;
}

const AddTaskModal = (props: AddTaskModalProps) => {
    const {open, handleClose, taskObject, taskDetailsOnChange, handleAddBtnClick, modalType, handleCheckboxChange, index} = props
    const [checkBox, setCheckBox] = useState<boolean>(taskObject.taskStatus === taskStatusEnum.completed);

    // const dateOnChange = (e: any) => {
    //     console.log("event", e);
    // }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="addTaskModal"
            >
            <Box className="addTaskBox">
                <Typography variant="h6" sx={{fontWeight: "bold", fontFamily: "Robboto Slab"}} component="h2">
                    {modalType === modalTypeEnum.add ? "Add Task" : "Edit Task"}
                </Typography>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            className="taskTitle"
                            label="Task Title"
                            onChange={(e)=>taskDetailsOnChange(e, "taskTitle", modalType, index)}
                            value={taskObject?.taskTitle ? taskObject?.taskTitle : ""}
                        />
                        <div className="taskDate">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    label="Date"
                                    // onChange={(e)=>taskDetailsOnChange(e, "taskDate", modalType)}
                                    // onChange={(e)=>dateOnChange(e)}
                                />
                            </LocalizationProvider>
                        </div>
                        <TextField
                            label="Description"
                            className="taskDescription"
                            multiline
                            rows={2}
                            variant="filled"
                            onChange={(e)=>taskDetailsOnChange(e, "taskDescription", modalType, index)}
                            value={taskObject?.taskDescription ? taskObject?.taskDescription : ""}
                        />
                        <FormControlLabel
                            label="Mark as Completed"
                            control={
                                <Checkbox
                                    checked={checkBox}
                                    onChange={(e)=>{
                                        setCheckBox(!checkBox)
                                        handleCheckboxChange(e, index)
                                    }}
                                />
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container className="btn-container">
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="outlined"
                            className="btn"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        { modalType === modalTypeEnum.add ?
                            <Button
                                variant="contained"
                                className="btn"
                                onClick={handleAddBtnClick}
                            >
                                Add
                            </Button>
                        :
                            <Button
                                variant="contained"
                                className="btn"
                                onClick={handleAddBtnClick}
                            >
                                Save changes
                            </Button>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default AddTaskModal;