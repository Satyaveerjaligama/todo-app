// import { useState } from "react";
import {Modal, Box, Typography, TextField, Button, Grid, FormControlLabel, Checkbox} from "@mui/material"
import { modalTypeEnum, taskObjectProps, taskStatusEnum } from "../utils/contants";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";

interface AddTaskModalProps {
    open: boolean;
    handleClose: () => void;
    taskObject: taskObjectProps;
    handleAddBtnClick: () => void;
    modalType: string;
    index: number;
    taskDetailsOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, type: string) => void;
    handleCheckboxChange: (event: React.BaseSyntheticEvent)=> void;
    handleSaveChangesClick: (index: number)=> void;
    dateOnChange: (e: Dayjs | null) => void;
}

const AddTaskModal = (props: AddTaskModalProps) => {
    const {open, handleClose, taskObject, taskDetailsOnChange, handleAddBtnClick, modalType, handleCheckboxChange, index, handleSaveChangesClick, dateOnChange} = props

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
                            onChange={(e)=>taskDetailsOnChange(e, "taskTitle", modalType)}
                            value={taskObject?.taskTitle ? taskObject?.taskTitle : ""}
                        />
                        <div className="taskDate">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    label="Date"
                                    onChange={(e)=>dateOnChange(e)}
                                    value={taskObject?.taskDate ? dayjs(taskObject.taskDate) : null}
                                />
                            </LocalizationProvider>
                        </div>
                        <TextField
                            label="Description"
                            className="taskDescription"
                            multiline
                            rows={2}
                            variant="filled"
                            onChange={(e)=>taskDetailsOnChange(e, "taskDescription", modalType)}
                            value={taskObject?.taskDescription ? taskObject?.taskDescription : ""}
                        />
                        <FormControlLabel
                            label="Mark as Completed"
                            control={
                                <Checkbox
                                    checked={taskObject.taskStatus === taskStatusEnum.completed}
                                    onChange={(e)=>handleCheckboxChange(e)}
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
                                onClick={()=>handleSaveChangesClick(index)}
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