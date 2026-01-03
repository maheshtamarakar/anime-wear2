import {configureStore} from '@reduxjs/toolkit'
import { homeReducer } from '../pages/home/slices/homeSlice'
import authSlice from '../pages/auth/slices/authSlice'

const store = configureStore({
    reducer: {
        home: homeReducer,
        auth: authSlice
    }
})

export default store