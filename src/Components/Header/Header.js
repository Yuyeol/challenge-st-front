import React from "react";
import poomang from "Assets/poomang.png";
import styled from "styled-components";

const Container = styled.div`
  img {
    height: 21.3px;
  }
`;
const Menu = styled.div``;

const Header = () => {
  return (
    <Container>
      <Menu></Menu>
      <img src={poomang} />
    </Container>
  );
};

export default Header;
