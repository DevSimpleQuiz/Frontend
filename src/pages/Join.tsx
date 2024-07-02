import styled from 'styled-components';
import Button from '../components/Button';
import { FormWrapper } from '../components/common/FormWrapper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FiInfo } from "react-icons/fi";

export interface JoinProps {
  id: string;
  password: string;
  passwordConfirm: string;
}

const Join = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted }
  } = useForm<JoinProps>();

  const navigate = useNavigate();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmit: SubmitHandler<JoinProps> = (data) => {
    console.log(data);
    window.alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  return (
    <FormWrapper>
      <h1>회원가입</h1>
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="check-id">
            <input
              type='text'
              placeholder='아이디'
              {...register('id', {
                required: true, 
                minLength: 5, 
                maxLength: 20,
                pattern: /^[a-z0-9]{5,20}$/,
              })}
            />
            <Button
              className='check-id-btn'
              type='button'
              size='short' 
              schema='normal'
            >중복 확인</Button>
          </div>
          <p className={`join-info ${isSubmitted && (errors.id ? 'invalid' : 'valid')}`}>
            <FiInfo className='icon-info' />
            5~20자 영문 소문자, 숫자로 입력해주세요.
          </p>
        </fieldset>
        <fieldset>
          <input
            type='password'
            placeholder='비밀번호'
            {...register('password', {
              required: true, 
              minLength: 5, 
              maxLength: 20,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{5,20}$/,
            })}
          />
          <p className={`join-info ${isSubmitted && (errors.password ? 'invalid' : 'valid')}`}>
            <FiInfo className='icon-info' />
            5~20자 영문 대/소문자, 숫자, 특수문자 (!@#$%)를 혼합하여 입력해주세요.
          </p>
        </fieldset>
        <fieldset>
          <input
            type='password'
            placeholder='비밀번호 확인'
            {...register('passwordConfirm', {
              required: true,
              minLength: 5, 
              maxLength: 20,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{5,20}$/,
              validate: (value) => value === watch('password'),
            })}
          />
          <p className={`join-info ${isSubmitted && (errors.passwordConfirm !== errors.password ? 'invalid' : 'valid')}`}>
            <FiInfo className='icon-info' />
            비밀번호 확인 여부
          </p>
        </fieldset>
        <Button
          className='join-btn'
          type='submit'
          size='long'
          schema='primary'>회원가입</Button>
        <div className="go-to-link">
          <span>이미 회원이신가요?</span>
          <Link to='/login'>로그인</Link>
        </div>
      </JoinForm>
    </FormWrapper>
  )
};

const JoinForm = styled.form`
  .check-id {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    input {
      flex: 8;
    }

    button {
      flex: 2;
    }
  }

  .join-info {
    margin: 0;
    margin-top: 4px;
    padding-left: 4px;
    /* height: 34px; */
    color: #333;
    font-size: ${({ theme }) => theme.text.text3};

    .icon-info {
      margin: 0;
      margin-right: 4px;
      padding: 0;
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

export default Join;
