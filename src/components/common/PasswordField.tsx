import React, { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FiEye, FiEyeOff, FiInfo } from "react-icons/fi";
import styled from "styled-components";

interface PasswordFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  onBlur?: () => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, register, error, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (register.onBlur) {
      register.onBlur(event);
    }
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <InputWrapper>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          onBlur={handleBlur} 
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      {error && (
        <ErrorMessage>
          <FiInfo className="icon-info" />
          {error.message}
        </ErrorMessage>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;

  .password-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    input {
      flex: 1;
      padding: 12px;
      border: 1px solid ${({ theme }) => theme.color.grey2};
      border-radius: 6px;
      font-size: ${({ theme }) => theme.text.text3};
    }

    button {
      margin: 0;
      padding: 5px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-top: 4px;
  padding-left: 4px;
  font-size: ${({ theme }) => theme.text.text3};
  color: red;
  
  .icon-info {
    margin-right: 4px;
  }
`;

export default PasswordField;
