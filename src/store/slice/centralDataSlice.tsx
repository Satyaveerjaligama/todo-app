import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { taskObjectProps } from "../../utils/contants"

export interface initialStateInterface {
    taskList: taskObjectProps[],
    page: string,
    searchingString: string,
}

const initialState: initialStateInterface = {
    taskList: [],
    page: "Dashboard",
    searchingString: "",
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
        },
        updateSearchingString: (state, action: PayloadAction<string>) => {
            state.searchingString = action.payload
        }
    }
})

export const { storeTaskList, updatePage, updateSearchingString } = centralDataSlice.actions

export default centralDataSlice.reducer