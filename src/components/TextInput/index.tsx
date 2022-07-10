import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { debounce } from '@utils';

interface TextInputProps {
  label: string
  onChange: (value: string, isValid: boolean)=> void
  type?: 'number' | 'text' | 'email' | 'tel'
  required?: boolean
  validationMessage?: string
}

const REGEXES = {
  tel: '[0-9]{11}',
  email: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  text: '.+',
  number: '[0-9]+',
};

const StyledLabel = styled.label`
  top: 35px;
  left: 10px;
  color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.text.large};
  align-items: center;
  transition: all .2s ease;
  position: absolute;
  pointer-events: none;
`;

const StyledTextInput = styled.input`
  margin: 10px 0 0 0;
  padding: 18px 12px;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  outline: none;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.text.large};
  background: transparent;
  height: 70px;
  
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
  
  &:focus, &:not(:placeholder-shown) {
    border-color: ${(props) => props.theme.colors.secondary};
    
    ~ ${StyledLabel} {
      top: 15px;
      font-size: ${(props) => props.theme.fontSizes.text.small};
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const StyledContainer = styled.div`
  position: relative;
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.text.large};
  letter-spacing: 1px;

  ${(props: { required: boolean, theme: Record<string, any> }) => props.required && css`
    &:after {
      content: '*';
      color: ${props.theme.colors.danger}
    }
  `}
`;

function TextInput({
  label,
  onChange,
  type = 'text',
  required = false,
  validationMessage,
}: TextInputProps) {
  const _onChange = useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e.target.validity.valid);
  }, 10), [onChange]);

  return (
    <StyledContainer>
      <StyledSpan required={required}>{label}</StyledSpan>
      <StyledContainer>
        <StyledTextInput
          onChange={_onChange}
          type={type}
          placeholder=" "
          {...(required ? { pattern: REGEXES[type] } : {})}
          required={required}
          title={validationMessage}
        />
        <StyledLabel>{label}</StyledLabel>
      </StyledContainer>
    </StyledContainer>
  );
}

export default TextInput;
