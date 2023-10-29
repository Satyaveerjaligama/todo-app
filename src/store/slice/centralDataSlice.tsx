import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { taskObjectProps } from "../../utils/contants"

export interface initialStateInterface {
    taskList: taskObjectProps[]
}

const initialState: initialStateInterface = {
    taskList: []
}

const centralDataSlice = createSlice({
    name: 'centralDataSlice',
    initialState,
    reducers: {
        storeTaskList: (state, action: PayloadAction<taskObjectProps[]>) => {
            state.taskList = action.payload
        }
    }
})

export const { storeTaskList } = centralDataSlice.actions

export default centralDataSlice.reducer