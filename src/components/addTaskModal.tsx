import {Modal, Box, Typography, TextField, Button, Grid} from "@mui/material"
import { taskObjectProps } from "../utils/contants";

interface AddTaskModalProps {
    open: boolean;
    handleClose: () => void;
    taskObject: taskObjectProps;
    taskDetailsOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
}

const AddTaskModal = (props: AddTaskModalProps) => {
    const {open, handleClose, taskObject, taskDetailsOnChange} = props

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className="addTaskModal"
            >
            <Box className="addTaskBox">
                <Typography variant="h6" sx={{fontWeight: "bold", fontFamily: "Robboto Slab"}} component="h2">
                    Add Task
                </Typography>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            className="taskTitle"
                            label="Task Title"
                            onChange={(e)=>taskDetailsOnChange(e, "taskTitle")}
                            value={taskObject?.taskTitle ? taskObject?.taskTitle : ""}
                        />
                        <TextField
                            variant="filled"
                            className="taskDate"
                            label="Task Date"
                            onChange={(e)=>taskDetailsOnChange(e, "taskDate")}
                            value={taskObject?.taskDate ? taskObject?.taskDate : ""}
                        />
                        <TextField
                            label="Description"
                            className="taskDescription"
                            multiline
                            rows={2}
                            variant="filled"
                            onChange={(e)=>taskDetailsOnChange(e, "taskDescription")}
                            value={taskObject?.taskDescription ? taskObject?.taskDescription : ""}
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
                        <Button
                            variant="contained"
                            className="btn"
                            onClick={handleClose}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default AddTaskModal;