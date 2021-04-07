import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
  width: 380px;
  height: 65px;
  font-family: Gong Gothic OTF;
  font-style: normal;
  font-weight: normal;
  padding: 13px;
  box-sizing: border-box;
  .banner-title {
    font-size: 16px;
    line-height: 19px;
  }
  .banner-subtitle {
    font-size: 15px;
    line-height: 17px;
    color: #828282;
  }
`;

const JoinBanner = () => {
  return (
    <Container>
      <div className="banner-title">심테, 나도 만들 수 있다고?</div>
      <div className="banner-subtitle">지금 바로 확인해보세요</div>
    </Container>
  );
};

export default JoinBanner;
