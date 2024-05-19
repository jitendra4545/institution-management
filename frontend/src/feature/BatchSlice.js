import { createSlice } from "@reduxjs/toolkit";




export const BatchDetails=createSlice({
    name:"BatchDetails",
    initialState:{
        Batch:[],
        isLoading:false,
        isError:false
    },
    reducer:{},
   
})

// console.log(BatchDetails.reducer)
export default BatchDetails.reducer