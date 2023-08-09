import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios';


export const userNameEdit=createAsyncThunk(
'user/userNameEdit',
async(nameEdit)=>{
  const request = await Axios.put(`http://127.0.0.1:3001/api/v1/user/profile`, nameEdit, {
    headers:{
    "Accept": "application/json",
    "Authorization": `Bearer${localStorage.getItem("token").replaceAll('"','')}`}
  });
  const response = await request.data;
  console.log(response)
  return response;
}
);

export const loginUser=createAsyncThunk(
  'user/loginUser',
  async(userCredential)=>{
        const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/login`, userCredential);
        const response = await request.data;
        localStorage.setItem("token", JSON.stringify(response.body.token))
        console.log(response)
        return response;
  }
);

export const userProfile=createAsyncThunk(
  'user/userProfile',
  async()=>{
     const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/profile`, null, {
        headers: {
           "Accept": "application/json",
           "Authorization": `Bearer${localStorage.getItem("token").replaceAll('"','')}`}
     })
     const response = await request.data;
     console.log(response)
    return response;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: 
  {
   token: null,
   userInfo: ""
  },
  reducers:
  {
   reset: (state) =>{
      state.token = null;
      state.userInfo = "";
   }
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.fulfilled,(state, action)=>{
      state.token = action.payload.body.token;
   })
   .addCase(loginUser.rejected,(state,action)=>{
    state.token = null;
    console.log(action.error.message);
   })
   .addCase(userProfile.fulfilled,(state, action)=>{
    state.userInfo = action.payload.body;
 })
 .addCase(userProfile.rejected,(state,action)=>{
  state.userInfo = "";
  console.log(action.error.message);
 })
 .addCase(userNameEdit.fulfilled,(state, action)=>{
  console.log("Successfully changed user name !");
  state.userInfo = action.payload.body;
})
.addCase(userNameEdit.rejected,(state,action)=>{
  console.log(action.error.message);
})

  }
})

export const {reset} = userSlice.actions;

export default userSlice.reducer;