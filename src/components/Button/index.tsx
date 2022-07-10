import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: ReactNode
    onClick?: ()=> void
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primaryLight};
  border: none;
  color: ${(props) => props.theme.colors.white};
  padding: 30px 60px;
  font-size: ${(props) => props.theme.fontSizes.text.large};
  letter-spacing: 4px;
  font-weight: 400;
  cursor: pointer;
  transition: all .3s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

function Button({ children, onClick = () => {} }: ButtonProps) {
  return (
    <StyledButton
      type="submit"
      onClick={onClick}
    >
      { children }
    </StyledButton>
  );
}

export default Button;
