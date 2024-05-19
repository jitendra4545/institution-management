import { createSlice } from "@reduxjs/toolkit";




export const PaymentDetails=createSlice({
    name:"PaymentDetails",
    initialState:{
        Payment:[],
        isLoading:false,
        isError:false,
    },
    reducer:{},
   
})

// console.log(PaymentDetails.reducer)
export default PaymentDetails.reducer

