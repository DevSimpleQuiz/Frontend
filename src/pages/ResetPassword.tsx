import styled from "styled-components";
import Button from "../components/Button";
import { FormWrapper } from "../components/common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiInfo, FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export interface ResetProps {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ResetProps>({ mode: "onChange" });

  const { isLoggedIn } = useAuthStore();
  const {
    userResetPassword,
    userCheckCurrentPassword,
    userCheckAvailablePassword,
  } = useAuth();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      window.alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  const onSubmit: SubmitHandler<ResetProps> = async (data) => {
    try {
      const isCurrentPasswordValid = await userCheckCurrentPassword(
        data.currentPassword
      );
      if (!isCurrentPasswordValid) {
        window.alert("현재 비밀번호가 틀렸습니다.");
        return;
      }

      const isAvailablePasswordValid = await userCheckAvailablePassword(
        data.currentPassword,
        data.password
      );
      if (!isAvailablePasswordValid) {
        window.alert("현재 비밀번호와 같은 비밀번호는 사용할 수 없습니다.");
        return;
      }

      await userResetPassword(data);
      window.alert("비밀번호가 재설정되었습니다.");
    } catch (error: any) {
      if (error.errors) {
        error.errors.forEach((err: string) => {
          window.alert(err);
        });
      } else {
        window.alert("비밀번호 재설정에 실패하였습니다.");
      }
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <FormWrapper>
      <h1>비밀번호 재설정</h1>
      <ResetPasswordForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="password-input">
            <input
              type={showCurrentPassword ? "text" : "password"}
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
              {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <ErrorMessage isValid={isSubmitted && !errors.currentPassword}>
            {errors.currentPassword && <FiInfo className="icon-info" />}
            {errors.currentPassword ? errors.currentPassword.message : ""}
          </ErrorMessage>
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
          <ErrorMessage isValid={isSubmitted && !errors.password}>
            {errors.password && <FiInfo className="icon-info" />}
            {errors.password ? errors.password.message : ""}
          </ErrorMessage>
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
          <ErrorMessage isValid={isSubmitted && !errors.passwordConfirm}>
            {errors.passwordConfirm && <FiInfo className="icon-info" />}
            {errors.passwordConfirm ? errors.passwordConfirm.message : ""}
          </ErrorMessage>
        </fieldset>
        <StyledButton
          className="reset-btn"
          type="submit"
          size="long"
          schema="primary"
          disabled={!isValid}
        >
          비밀번호 재설정
        </StyledButton>
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
`;

const ErrorMessage = styled.p<{ isValid: boolean }>`
  margin: 0;
  margin-top: 4px;
  padding-left: 4px;
  font-size: ${({ theme }) => theme.text.text3};
  color: ${({ isValid, theme }) => (isValid ? "green" : "red")};

  .icon-info {
    margin-right: 4px;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grey1 : theme.color.primary};
  /* cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; */
`;

export default ResetPassword;
