import { Group, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} className="form-input" />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
