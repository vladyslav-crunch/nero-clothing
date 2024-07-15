import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLabel shrink={inputOptions.value.lenght}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
