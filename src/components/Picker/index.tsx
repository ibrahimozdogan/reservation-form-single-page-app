import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

interface SelectProps {
  options: {
    value: string;
    name: string;
  }[];
  required?: boolean
  placeholder: string
  label: string
  onChange: (value: string)=> void
}

const StyledSelect = styled.select`
  margin: 10px 0 0 0;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  background-color: transparent;
  padding: 18px 12px;
  font-size: ${(props) => props.theme.fontSizes.text.large};
  height: 70px;
  font-weight: 400;
  border-radius: 3px;
  cursor: pointer;

  &:not(:valid) {
    color: gray;
  }

  &:valid {
    border-color: ${(props) => props.theme.colors.secondary};
  }
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

function Button({ options, label, required = false, placeholder, onChange }: SelectProps) {
  const _onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div>
      <StyledSpan required={required}>{label}</StyledSpan>
      <StyledSelect required={required} onChange={_onChange}>
        <option value="" disabled selected>{ placeholder }</option>
        { options.map((option) => (
          <option
            value={option.value}
            key={option.value}
          >
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Button;
