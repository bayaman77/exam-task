import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  margin: 2px;
  min-width: 4rem;
  font: inherit;
  background: #351c75;
  color: white;
  border: 1px solid #351c75;
  padding: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    background: #4b28a2;
    border-color: #4b28a2;
  }
`;
