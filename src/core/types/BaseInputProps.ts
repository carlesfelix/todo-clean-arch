type BaseInputProps<InputValue = any> = {
  onChange: (value: InputValue) => void;
  value: InputValue;
};

export default BaseInputProps;
