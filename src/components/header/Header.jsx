import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../Context";

const Header = () => {
  const { theme, setTheme } = useContext(Context);

  return (
    <StyledHeader>
      <Title style={{ color: `${theme ? '#4672fe' : '#351c75'}`}}>Calculator</Title>
      <StyledBtn onClick={() => setTheme((prev) => !prev)}>change theme</StyledBtn>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const StyledBtn = styled.button`
  position: fixed;
  right: 50px;
  padding: 5px 10px;
  background-color: #ff9d00;
  border:2px solid #ff9d00;
  border-radius: 2px;
  color: white;
  cursor: pointer;
`;
