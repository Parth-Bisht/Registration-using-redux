import axios from 'axios'

export const GET_USER_DATA = 'GET_USER_DATA';

export const getUserData = (payload)=>({
    type:GET_USER_DATA,
    payload
})

export const forceGetData = (input)=>(dispatch)=>{
    axios.get(`https://api.github.com/users/${input}`)
    .then((res)=>dispatch(getUserData(res.data)))
}