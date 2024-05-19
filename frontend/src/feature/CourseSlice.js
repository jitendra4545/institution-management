import { createSlice } from "@reduxjs/toolkit";




export const CourseDetails=createSlice({
    name:"CourseDetails",
    initialState:{
        Course:[],
        isLoading:false,
        isError:false
    },
    reducer:{},
   
})

// console.log(CourseDetails.reducer)
export default CourseDetails.reducer