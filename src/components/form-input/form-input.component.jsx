import './form-input.styles.scss'

const formInput = ({label,id,...otherProps}) => {
  return (
    <div className="group">
         <input className="form-input"
        {...otherProps}
      />
      <label className={`${otherProps.value.length ? "shrink":""} form-input-label`} htmlFor={id}>{label}</label>
    </div>
  );
};
export default formInput;
