import { useState } from "react"
import AuthContext from "./authContext"

export default function AuthState(props){
    const [data, setData] = useState({
        name: 'Shrishti',
        age: 25
    })
    const update = function(upData){
        setData(function(prev){
            return {...prev, upData}
        })
    }
    return (
        <AuthContext.Provider value={data}>
            {props.children}
        </AuthContext.Provider>
    )
}