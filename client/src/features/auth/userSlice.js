import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios';

export const loginUser=createAsyncThunk(
   'user/loginUser',
   async(userCredential)=>{
         const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/login`, userCredential);
         console.log(request);
         const response = await request.data;
         localStorage.setItem('token', JSON.stringify(request.data.body.token));
         return response;
   }
);

export const userProfile=createAsyncThunk(
   'user/userProfile',
   async()=>{
      const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/profile`, null, {
         headers: {
            "Accept": "application/json",
            "Authorization": `Bearer${localStorage.getItem("token").replaceAll('"','')}`
         }
      })
      console.log(request);
      const response = await request.data;
      localStorage.setItem('user', JSON.stringify(request.data.body));
      return response;
   }
)



const userSlice = createSlice({
  name: 'user',
  initialState: 
  {
   loading: false,
   user: null,
   error: null
  },
  extraReducers: (builder)=>{
      builder
      .addCase(loginUser.pending,(state)=>{
         state.loading = true;
         state.user = null;
         state.error = null;
      })
      .addCase(loginUser.fulfilled,(state, action)=>{
         state.loading = false;
         state.user = action.payload;
         state.error = null;
      })
      .addCase(loginUser.rejected,(state,action)=>{
         state.loading = false;
         state.user = null;
         console.log(action.error.message);
         if(action.error.message === "Request failed with status code 400"){
            state.error = "Access Denied! Invalid Credentials";
         }
         else{
            state.error = action.error.message;
         }
      })
  }
})

export default userSlice.reducer