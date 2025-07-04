import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.surface.background.primary};
  color: ${({ theme }) => theme.colors.surface.text.onPrimary};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
