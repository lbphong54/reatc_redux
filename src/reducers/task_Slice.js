import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        list: [],
    },
    reducers: {
        add: (state,action)=>{
            state.list = state.list.concat(action.payload)
        },
        del: (state,action) => {
            state.list = state.list.filter(function(task){
                return task != action.payload;
            })
        },
    },
})

export const { add, del } = taskSlice.actions

export default taskSlice.reducer