import React from "react";
import Search from "../components/Home/Search/Search";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Img = styled.img`
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Img src={logo} />
        <Search />
      </Container>
    </>
  );
};

export default Home;
