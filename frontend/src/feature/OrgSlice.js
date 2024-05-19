import { createSlice } from "@reduxjs/toolkit";




export const OrgDetails=createSlice({
    name:"OrgDetails",
    initialState:{
        org:[],
        isLoading:false,
        isError:false,
    },
    reducer:{},
   
})

// console.log(OrgDetails.reducer)
export default OrgDetails.reducer

