import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #1862f4;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Title = styled.h2`
  font-weight: 400;
`;

const Header = () => (
  <StyledHeader>
    <Title>Dashboard</Title>
  </StyledHeader>
);

export default Header;
