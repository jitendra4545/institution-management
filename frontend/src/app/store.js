// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import orgReducer from '../feature/OrgSlice'; // Import the default reducer
import batchReducer from '../feature/BatchSlice';
import courseReducer from '../feature/CourseSlice';
import loginReducer from '../feature/LoginSlice';
import paymentReducer from '../feature/PaymentSlice';
import studentReducer from '../feature/StudentSlice';
export const store = configureStore({
    reducer: {
        org: orgReducer,
        batch: batchReducer,
        course: courseReducer,
        login: loginReducer,
        payment: paymentReducer,
        student: studentReducer // Assign the imported reducer to a key in the reducer object
    },
});
