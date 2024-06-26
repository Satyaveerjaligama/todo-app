export interface taskObjectProps {
    taskTitle: string,
    taskDescription: string,
    taskStatus: string,
    taskDate: string,
}

export interface taskErrorsProps {
    taskTitle: string,
    taskDate: string,
}

export const taskStatusEnum= Object.freeze({
    pending: "pending",
    completed: "completed",
})

export const modalTypeEnum = Object.freeze({
    add: "add",
    edit: "edit",
})

export const pageNames = Object.freeze({
    dashboard: "dashboard",
    all: "all",
    pending: "pending",
    completed: "completed",
})

export const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const sampleData: taskObjectProps[] = [
    {
        taskTitle: "Sample1",
        taskDescription: "Description1",
        taskStatus: "completed",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample2",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample3",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample4",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample5",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample6",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    },
    {
        taskTitle: "Sample7",
        taskDescription: "Description1",
        taskStatus: "pending",
        taskDate: "10-10-2000",
    }
]