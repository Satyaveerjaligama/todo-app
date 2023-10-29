import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { taskObjectProps } from "../../utils/contants"

export interface initialStateInterface {
    taskList: taskObjectProps[],
    page: string,
}

const initialState: initialStateInterface = {
    taskList: [],
    page: "Dashboard",
}

const centralDataSlice = createSlice({
    name: 'centralDataSlice',
    initialState,
    reducers: {
        storeTaskList: (state, action: PayloadAction<taskObjectProps[]>) => {
            state.taskList = action.payload
        },
        updatePage: (state, action: PayloadAction<string>) => {
            state.page = action.payload
        }
    }
})

export const { storeTaskList, updatePage } = centralDataSlice.actions

export default centralDataSlice.reducer