import { createSlice } from "@reduxjs/toolkit";




export const LoginDetails=createSlice({
    name:"LoginDetails",
    initialState:{
        token:"",
        isLoading:false,
        isError:false,
    },
    reducer:{},
   
})

// console.log(LoginDetails.reducer)
export default LoginDetails.reducer

