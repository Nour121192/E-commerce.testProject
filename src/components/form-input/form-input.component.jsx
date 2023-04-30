import {FormInputLabel,Input,Group} from './form-input.styles.jsx'

const formInput = ({label,id,...otherProps}) => {
  return (
    <Group>
         <Input
        {...otherProps}
      />
      <FormInputLabel shrink={otherProps.value.length} htmlFor={id}>{label}</FormInputLabel>
    </Group>
  );
};
export default formInput;
