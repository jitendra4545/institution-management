import { createSlice } from "@reduxjs/toolkit";




export const StudentDetails=createSlice({
    name:"StudentDetails",
    initialState:{
        Student:[],
        isLoading:false,
        isError:false,
    },
    reducer:{},
   
})

// console.log(StudentDetails.reducer)
export default StudentDetails.reducer