import { GET_USER_DATA } from "./action";

const iniState = {
    user:false,
    userData : {}
}

export const reducer = (state=iniState,{type,payload})=>{
    switch (type) {
        case GET_USER_DATA:
            return{
                ...state,
                user:true,
                userData:payload
            }
            
    
        default:
            return state
    }
}
