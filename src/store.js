import { configureStore } from '@reduxjs/toolkit'
import  taskReducer  from './reducers/task_Slice'

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})