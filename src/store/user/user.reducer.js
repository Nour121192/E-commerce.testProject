// import user_action_types from './user.type'
import { createSlice } from '@reduxjs/toolkit'


// const intial_state = {currentUser:null}


export const userSlice = createSlice({
  name:"user",
  initialState:{currentUser:null},
  reducers:{
    setCurrentUser(state,action){
      state.currentUser = action.payload
    }
  }
})

export const userReducer = userSlice.reducer

export const {setCurrentUser}=userSlice.actions

// export const userReducer = (state = intial_state,action) => {
//     switch(action.type){
//     case user_action_types.set_user :
//       return {...state, currentUser:action.payload}
//       default:
//         return state;
//     }
//     }