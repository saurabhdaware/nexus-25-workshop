import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.surface.background.primary.intense};
  color: ${({ theme }) => theme.colors.surface.text.onPrimary.onIntense};
  border: none;
  padding: ${({ theme }) => theme.spacing["3"]}
    ${({ theme }) => theme.spacing["6"]};
  border-radius: 4px;
`;

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
