import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedin: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: function(state, action){
            state.isLoggedin = true
            state.user = action.payload
        },
        logout: function(state, action){
            state.isLoggedin = false
            state.user = null
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer;