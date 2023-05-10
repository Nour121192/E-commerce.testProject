import user_action_types from './user.type'

const intial_state = {currentUser:null}


export const userReducer = (state = intial_state,action) => {
    switch(action.type){
    case user_action_types.set_user :
      return {...state, currentUser:action.payload}
      default:
        return state;
    }
    }