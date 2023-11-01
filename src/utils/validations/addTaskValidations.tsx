import { taskErrorsProps, taskObjectProps } from "../contants"

export const addTaskValidations = (taskDetails: taskObjectProps) => {
    const errors: taskErrorsProps = {
        taskTitle: "",
        taskDate: "",
    }
    let errorCount = 0;

    if(taskDetails.taskTitle === "") {
        errors.taskTitle = " Please enter Task Title";
        errorCount = errorCount + 1;
    }
    if(taskDetails.taskDate === "") {
        errors.taskDate = "Please enter Task Date";
        errorCount = errorCount + 1;
    } else if (taskDetails.taskDate === "Invalid Date") {
        errors.taskDate = "Please enter valid Task Date";
        errorCount = errorCount + 1;
    }

    return {errors, isValid: errorCount === 0 ? true : false};
}