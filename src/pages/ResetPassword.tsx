import styled from "styled-components";
import Button from "../components/Button";
import { FormWrapper } from "../components/common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FiInfo, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export interface JoinProps {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<JoinProps>();

  const navigate = useNavigate();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
    window.alert("비밀번호가 재설정되었습니다.");
    navigate("/login");
  };

  return (
    <FormWrapper>
      <h1>비밀번호 재설정</h1>
      <ResetPasswordForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="password-input">
            <input
              type={showCurrentPassword  ? "text" : "password"}
              placeholder="현재 비밀번호 입력"
              {...register("currentPassword", {
                required: "현재 비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 최대 20자까지 가능합니다.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?])[a-zA-Z0-9!@#$%?]{8,20}$/,
                  message:
                    "8~20자 영문 대/소문자, 숫자, 특수문자를 혼합하여 입력해주세요.",
                },
              })}
            />
            <button type="button" onClick={toggleCurrentPasswordVisibility}>
              {showCurrentPassword  ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p
            className={`reset-info ${
              isSubmitted && !errors.currentPassword
                ? "valid"
                : isSubmitted
                ? "invalid"
                : ""
            }`}
          >
            {errors.currentPassword && <FiInfo className="icon-info" />}
            {errors.currentPassword ? errors.currentPassword.message : ""}
          </p>
        </fieldset>
        <fieldset>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="신규 비밀번호 입력"
              {...register("password", {
                required: "신규 비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 최대 20자까지 가능합니다.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?])[a-zA-Z0-9!@#$%?]{8,20}$/,
                  message:
                    "8~20자 영문 대/소문자, 숫자, 특수문자를 혼합하여 입력해주세요.",
                },
                validate: (value) =>
                    value !== watch("currentPassword") ||
                    "기존 비밀번호와 동일합니다.",
              })}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p
            className={`reset-info ${
              isSubmitted && !errors.password
                ? "valid"
                : isSubmitted
                ? "invalid"
                : ""
            }`}
          >
            {errors.password && <FiInfo className="icon-info" />}
            {errors.password ? errors.password.message : ""}
          </p>
        </fieldset>
        <fieldset>
          <div className="password-input">
            <input
              type={showPasswordConfirm ? "text" : "password"}
              placeholder="신규 비밀번호 확인"
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력해주세요.",
                validate: (value) =>
                  value === watch("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
            />
            <button type="button" onClick={togglePasswordConfirmVisibility}>
              {showPasswordConfirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p
            className={`reset-info ${
              isSubmitted && !errors.passwordConfirm
                ? "valid"
                : isSubmitted
                ? "invalid"
                : ""
            }`}
          >
            {errors.passwordConfirm && <FiInfo className="icon-info" />}
            {errors.passwordConfirm ? errors.passwordConfirm.message : ""}
          </p>
        </fieldset>
        <Button className="reset-btn" type="submit" size="long" schema="primary">
          비밀번호 재설정
        </Button>
      </ResetPasswordForm>
    </FormWrapper>
  );
};

const ResetPasswordForm = styled.form`
  .password-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    input {
      flex: 8;
    }

    button {
      margin: 0px;
      padding: 5px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .reset-info {
    margin: 0;
    margin-top: 4px;
    padding-left: 4px;
    font-size: ${({ theme }) => theme.text.text3};

    .icon-info {
      margin-right: 4px;
    }
  }

  .valid {
    color: green;
  }

  .invalid {
    color: red;
  }

  .error {
    color: red;
    font-size: ${({ theme }) => theme.text.text2};
    margin-bottom: 16px;
  }
`;

export default ResetPassword;
