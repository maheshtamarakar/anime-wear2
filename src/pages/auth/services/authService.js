import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const registerUser = async function(userInfo){
    try{
        const createdUser = await api.post('/auth/create', userInfo) 
        return createdUser;       
    }catch(err){
        throw err.response?.data?.message       
    }
}

export const loginUser = async function(userInfo){
    try{
        const user = await api.post('/auth/login', userInfo) 
        return user;       
    }catch(err){
        throw err.response?.data?.message || 'Login failed!'       
    }
}