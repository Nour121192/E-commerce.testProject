import user_action_types from "./user.type"
// import { useDispatch,useSelector } from "react-redux"
// import { selectUser } from "./user.selection"

export const setCurrentUser = (user)=> {return {type:user_action_types.set_user ,payload:user}}

// export const UseCurUser = () => {
//     const dispatch = useDispatch()
//     const currentUser = useSelector(selectUser)
//     const Dispatch = (user) => dispatch({type:user_action_types.set_user ,payload:user})
//     return {Dispatch,currentUser}
// }