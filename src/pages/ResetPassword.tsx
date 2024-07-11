import styled from "styled-components";
import Button from "../components/Button";
import { FormWrapper } from "../components/common/FormWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import PasswordField, {
  ErrorMessage,
} from "../components/common/PasswordField";
import { FiInfo } from "react-icons/fi";

export interface ResetProps {
  password: string;
  newPassword: string;
  passwordConfirm: string;
}

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ResetProps>({ mode: "onChange" });

  const { isLoggedIn } = useAuthStore();
  const {
    userResetPassword,
    userCheckCurrentPassword,
    userCheckAvailablePassword,
    userLogout,
  } = useAuth();

  const [apiError, setApiError] = useState<string | null>(null);
  const [newApiError, setNewApiError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const onBlurCurrentPassword = async () => {
    const currentPassword = watch("password");
    if (currentPassword) {
      const isCurrentPasswordValid = await userCheckCurrentPassword(
        currentPassword
      );
      if (!isCurrentPasswordValid) {
        setApiError("현재 비밀번호가 틀렸습니다.");
      } else {
        setApiError(null);
      }
    }
  };

  const onBlurNewPassword = async () => {
    const currentPassword = watch("password");
    const newPassword = watch("newPassword");
    if (currentPassword && newPassword) {
      const isAvailablePasswordValid = await userCheckAvailablePassword(
        currentPassword,
        newPassword
      );
      if (!isAvailablePasswordValid) {
        setNewApiError("현재 비밀번호와 같은 비밀번호는 사용할 수 없습니다.");
      } else {
        setNewApiError(null);
      }
    }
  };

  const onSubmit: SubmitHandler<ResetProps> = async (data) => {
    try {
      await userResetPassword(data.password, data.newPassword);
      userLogout();
    } catch (error: any) {
      if (error.message) {
        console.error(error.message);
      } else {
        window.alert("비밀번호 재설정에 실패하였습니다.");
      }
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <FormWrapper>
      <h1>비밀번호 재설정</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <PasswordField
            placeholder="현재 비밀번호 입력"
            register={register("password", {
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
            error={errors.password}
            onBlur={onBlurCurrentPassword}
            
          />
          {apiError && <ErrorMessage><FiInfo className="icon-info" />{apiError}</ErrorMessage>}
        </fieldset>
        <fieldset>
          <PasswordField
            placeholder="신규 비밀번호 입력"
            register={register("newPassword", {
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
            })}
            error={errors.newPassword}
            onBlur={onBlurNewPassword}
           
          />
          {newApiError && <ErrorMessage><FiInfo className="icon-info" />{newApiError}</ErrorMessage>}
        </fieldset>
        <fieldset>
          <PasswordField
            placeholder="신규 비밀번호 확인"
            register={register("passwordConfirm", {
              required: "비밀번호 확인을 입력해주세요.",
              validate: (value) =>
                value === watch("newPassword") ||
                "비밀번호가 일치하지 않습니다.",
            })}
            error={errors.passwordConfirm}
            
          />
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
      </StyledForm>
    </FormWrapper>
  );
};

const StyledForm = styled.form`
  width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.grey1 : theme.color.primary};
`;

export default ResetPassword;
