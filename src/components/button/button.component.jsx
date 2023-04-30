import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";
/* 
button types:

default

google

inverted
*/
export const Button_Types = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_Types.base) =>
  ({
    [Button_Types.base]: BaseButton,
    [Button_Types.google]: GoogleButton,
    [Button_Types.inverted]: InvertedButton,
  }[buttonType]);

const button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default button;
