import SignUpForm from '../../components/sign-up-form/sign-up.component'
import SignInForm from '../../components/sign-in-form/sign-in.component'
import './authentication.styles.scss'
// import {userContextStorage} from '../../contexts/user.context'
// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/user/user.selection'

const Auth = () => {
  const currentUser = useSelector(selectUser)
// const {currentUser} = useContext(userContextStorage)
const go = useNavigate()
currentUser && setTimeout(()=>{go('/')},2000)
  return (
    <>
    
    {!currentUser && <div className='auth-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
}
    </>
  );
};

export default Auth;
