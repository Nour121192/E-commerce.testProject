import { useState,useContext } from "react"
import {signUpWithEmailAndPassword,creatUserDocumentFromAuthSignUp,creatUserDocumentFromAuth} from '../../utiles/firebase/firebase.utiles'
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component"
import './sign-up.styles.scss'
// import {userContextStorage} from '../../contexts/user.context'
import { setCurrentUser } from "../../store/user/user.reducer"
import { useDispatch } from "react-redux"

const defaultFormatFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}


const SignUpForm = () => {
const [formatField,setFormatField] = useState(defaultFormatFields)
const {displayName,email,password,confirmPassword} = formatField

// const {setCurrentUser} = useContext(userContextStorage)
const dispatch = useDispatch()

    const handleChange =  (event) =>{
        const {name,value}=event.target
        setFormatField({ ...formatField,[name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert("your password does not match the confirmpassword MF")
            return;
        }
        try{
        const res = await signUpWithEmailAndPassword(email,password)
        const toDataBase =  await creatUserDocumentFromAuth(res.user,{displayName})

        dispatch(setCurrentUser(res.user))

        console.log(res)
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("you email is already used, pelease inter aother valid email")
            
        }else{
            console.log("try again", error.code)
        }
    }
    }
    return(
        <div className="sign-up-container">
            <h2>Do not have an account?</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="displayName" id="name" onChange={handleChange} type="text" value={displayName} name="displayName" required/>

                
                <FormInput label="email" id="email" onChange={handleChange} type="email" value={email} name="email" required/>

                
                <FormInput label="password" id="password" onChange={handleChange} type="password" value={password} name="password" required/>

                
                <FormInput label="confirmPassword" id="confirmpassword" onChange={handleChange} type="Password" value={confirmPassword} name="confirmPassword" required/>

                <Button type="submit" children={'Sign Up'}/>
            </form>
        </div>
    )
}

export default SignUpForm