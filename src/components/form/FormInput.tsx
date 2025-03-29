import {
  Control,
  Controller,
  FieldValues,
  Path,
  useFormState,
} from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.8rem;
  border: none;
`;

const ErrorMsg = styled.small`
  color: red;
  font-size: 1rem;
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
  const { errors } = useFormState({ control });
  return (
    <>
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
      {errors[name] && <ErrorMsg>{errors[name]?.message as string}</ErrorMsg>}
    </>
  );
};

export default FormInput;
