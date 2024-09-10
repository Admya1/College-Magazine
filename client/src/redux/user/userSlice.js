import {createSlice} from '@reduxjs/toolkit';
const initialState={
    currentUser:null,
    error:null,
    loading:false,    
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        updateStart:(state)=>{
            state.loading=true;
            state.error=null;
        },
        updateSuccess:(state,action)=>{
            state.error=null;
            state.loading=false;
            state.currentUser=action.payload;
        },
        updateFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        deleteUserStart:(state)=>{
            state.error=null;
            state.loading=true;
        },
        deleteUserSuccess:(state)=>{
            state.error=null;
            state.loading=false;
            state.currentUser=null;
        },
        deleteUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        signOut:(state)=>{
            state.currentUser=null;
            state.error=null;
            state.loading=false;
        }
    },
  });
  export const { signInStart,signInSuccess,signInFailure,updateFailure,updateSuccess,updateStart,deleteUserFailure,deleteUserSuccess,deleteUserStart,signOut} = userSlice.actions  
  export default userSlice.reducer