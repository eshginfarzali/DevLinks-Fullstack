import { forwardRef } from "react";
import styled from "styled-components";
import { Controller, Control } from "react-hook-form";
import { FormValues } from "../../moduls";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  font-family: Instrument Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color);
`;

const InputField = styled.input`
  width: 90%;
  border: 1px solid var(--grey-color);
  border-radius: 4px;
  height: 48px;
  padding-left: 10px;
  border-radius: 8px;
  &:focus {
    border-color: var(--button-color);
  }
`;

interface InputProps {
  control?: Control<FormValues>;
  label: string;
  name: "email" | "password" | "passConfirm";
  placeholder: string;
  type: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, name, control, placeholder, type } = props;

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            {...field}
            type={type}
            placeholder={placeholder}
            required
            ref={ref}
          />
        )}
      />
    </InputContainer>
  );
});
