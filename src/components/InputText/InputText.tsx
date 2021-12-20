import { ChangeEvent } from "react";
import { InputTextProps } from "./types";

export default function InputText(props: InputTextProps) {
  const { placeholder, value, onChange } = props;
  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    const { currentTarget } = event;
    const { value } = currentTarget;
    onChange(value);
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}
