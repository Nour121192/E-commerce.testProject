import { useState } from "react";
import {
  signsInWithEmailAndPassword,
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utiles/firebase/firebase.utiles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in.styles.scss";

const defaultFormatFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formatField, setFormatField] = useState(defaultFormatFields);
  const { email, password } = formatField;

  const logGoogleUser = async () => {
  await signInWithGooglePopup();
    
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormatField({ ...formatField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signsInWithEmailAndPassword(email, password);
      

      console.log(response);
    } catch (error) {
        switch(error.code){
            case "auth/user-not-found":
                alert("email not found, enter Your email")
                break;
            case 'auth/wrong-password':
                alert("password is not valid, please enter the correct password")
                break;
                default:
                    console.log('the error is' , error.code)
        }

    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          id="email"
          onChange={handleChange}
          type="email"
          value={email}
          name="email"
          required
        />

        <FormInput
          label="password"
          id="password"
          onChange={handleChange}
          type="password"
          value={password}
          name="password"
          required
        />
        <div className="buttons-container">
          <Button type="submit" children={"sign in"} />
          <Button
            type="button"
            buttonType={"google"}
            onClick={logGoogleUser}
            children={"Google Sign In"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
