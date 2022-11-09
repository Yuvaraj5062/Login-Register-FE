import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { create } from "yup/lib/Reference";


export const register = createAsyncThunk('authSlice/register', async(payload, {dispatch, rejectWithValue})=>{
    try {
        console.log(payload, 'in slice')
        const res = await axios.post(`http://localhost:8080/api/v1/auth/create-user`, { ...payload})
        if(res){
            return res
        }else{
             throw new Error(res.data.message);
        }
    } catch (error) {
        console.log(error)
        // return rejectWithValue()
    }
})

export const login = createAsyncThunk('authSlice/login', async(payload, {dispatch, rejectWithValue})=>{
try {
    console.log(payload)
    localStorage.setItem("email", payload?.email)
    const  res = await axios.post('http://localhost:8080/api/v1/auth/login', payload)
    if(res){
        return res
    }else{
         throw new Error(res.data.message);
    }
    
} catch (error) {

    console.log(error)
     return rejectWithValue(error.message);
    
}
})









const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        user:null,
        message:'',
        loading:'',
        status:null       
    },
    reducers:{
        clearState: (state, action) => {
            state.error = null;
            state.loading = false;
            state.message = "";
            state.status = null;
          },
    }, 
    extraReducers:{
      
    [login.pending]: (state) => {
          state.loading = true;
         state.message="Please Wait"
      },
      [login.fulfilled]: (state, action) => {
        state.loading = false;
        if(action.payload?.status===200){
            state.status=action.payload.status
            console.log("ful",action.payload?.data?.msg)
            
            state.message=action.payload?.data?.msg
        }
        else{
            state.message="credential not valid"
            localStorage.clear();
        }
      },
      [login.rejected]: (state, error) => {
        state.loading = false;
        state.message="Credential not valid"
        localStorage.clear();
      },

      [register.pending]: (state) => {
        state.loading = true;
        state.message="Please Wait"
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("doene",)
      if(action.payload?.status===200){
          state.status=action.payload.status  
          state.message=action.payload?.data?.msg
      }else{
        state.message="User not Register"
      }
    },
    [register.rejected]: (state, error) => {
      state.loading = false;
      state.message="User not Register"
      
    },


    }
})


export const { clearState} = authSlice.actions;
export default authSlice.reducer