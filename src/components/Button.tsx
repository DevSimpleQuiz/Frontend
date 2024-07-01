import React from 'react';
import styled from 'styled-components';
import { ButtonSchema, ButtonSize } from '../styles/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  schema: ButtonSchema;
}

const Button = ({ children, size, schema, ...props }: Props) => {
  return (
    <ButtonWrapper
      size={size}
      schema={schema}
      {...props}
    >{ children }</ButtonWrapper>
  )
};

const ButtonWrapper = styled.button<Omit<Props, 'children'>>`
  padding: ${({ theme, size }) => theme.button[size].padding};
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  color: ${({ theme, schema }) => theme.buttonSchema[schema].color};
  background-color: ${({ theme, schema }) => theme.buttonSchema[schema].backgroundColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all linear 0.15s;

  &:hover {
    opacity: 0.85;
    transition: all linear 0.15s;
  }
`;

export default Button;