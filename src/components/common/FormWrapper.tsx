import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Form = ({ children }: Props) => {
  return (
    <FormWrapper>
      {children}
    </FormWrapper>
  )
};

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);

  h1 {
    font-size: ${({ theme }) => theme.heading.title1};
  }

  input, button {
    padding: 12px;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.text.text3};
  }

  form {
    width: 364px;

    fieldset {
      margin: 12px 0;
      padding: 0;
      border: none;
  
      input {
        margin: 0;
        width: 100%;
        color: ${({ theme }) => theme.color.primary};
        font-weight: 400;
        border: 1px solid ${({ theme }) => theme.color.grey2};

        &:focus {
          outline: none;
          border: 1px solid ${({ theme }) => theme.color.blue};
        }
      }

      .err-text {
        margin: 0;
        margin-top: 4px;
        padding-left: 4px;
        color: ${({ theme }) => theme.color.red};
        font-size: ${({ theme }) => theme.text.text3};
      }
    }
  
    .join-btn,
    .login-btn {
      width: 100%;
      font-size: ${({ theme }) => theme.text.text1};
    }

    .go-to-link {
    display: flex;
    justify-content: center;
    margin-top: 24px;

    span {
      margin-right: 4px;
    }

    a {
      color: ${({ theme }) => theme.color.primary};
      text-decoration: underline;
    }
  }
  }
`;

export default Form;