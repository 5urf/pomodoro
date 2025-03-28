import { Control, Controller, FieldValues, Path } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.8rem;
  border: none;
`;

interface IFormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  type?: string;
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  type = "number",
}: IFormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          onChange={(e) => field.onChange(Number(e.target.value))}
        />
      )}
    />
  );
};

export default FormInput;
