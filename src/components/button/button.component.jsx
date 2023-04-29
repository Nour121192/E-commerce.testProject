import "./button.styles.scss";
/* 
button types:

default

google

inverted
*/
const Button_Type_classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_Type_classes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default button;
