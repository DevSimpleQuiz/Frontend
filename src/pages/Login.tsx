import styled from 'styled-components';
import { FormWrapper } from '../components/common/FormWrapper';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export interface LoginProps {
  id: string;
  password: string;
}

export interface LoginToken extends LoginProps {
  token: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginProps>();

  const { userLogin } = useAuth();

  const onSubmit = (data: LoginProps) => {
    userLogin(data);
  };

  return (
    <FormWrapper>
      <h1>로그인</h1>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            type='text'
            placeholder='아이디'
            {...register('id', {
              required: true, 
              minLength: 5, 
              maxLength: 20,
              pattern: /^[a-z0-9]{5,20}$/,
            })}
            inputMode='text'
          />
          {errors.id && <p className='err-text'>아이디를 입력해주세요. (5~20자의 영문 소문자, 숫자)</p>}
        </fieldset>
        <fieldset>
          <input
            type='password'
            placeholder='비밀번호'
            {...register('password', {
              required: true, 
              minLength: 8, 
              maxLength: 20,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?])[a-zA-Z0-9!@#$%?]{8,20}$/,
            })}
            inputMode='text'
          />
          {errors.password && <p className='err-text'>비밀번호를 입력해주세요. (8~20자의 영문 대/소문자, 숫자, 특수문자)</p>}
        </fieldset>
        <Button
          className='login-btn'
          type='submit'
          size='long'
          schema='primary'>로그인</Button>
        <div className="go-to-link">
          <span>아직 회원이 아니신가요?</span>
          <Link to='/users/join'>회원가입</Link>
        </div>
      </LoginForm>
    </FormWrapper>
  )
};

const LoginForm = styled.form`

`;

export default Login;