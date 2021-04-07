import React from "react";
import styled from "styled-components";
import JoinBanner from "Components/JoinBanner/JoinBanner";
import Make from "Screens/Make";
import Header from "Components/Header/Header";

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <JoinBanner />
      <Header />
      <Make />
    </Container>
  );
};
export default App;
