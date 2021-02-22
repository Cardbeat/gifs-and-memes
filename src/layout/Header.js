import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  position: fixed;
  z-index: 999;
`;

const Middle = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
  top: 20%;
`;

const Left = styled.div`
  float: left;
  position: relative;
  top: 30%;
  left: 30px;
  cursor: pointer;
`;

const Header = ({ children }) => {
  const history = useHistory();
  return (
    <Container>
      <Left onClick={() => history.push("/")}>
        <img width={150} src={logo} />
      </Left>
      <Middle>{children}</Middle>
    </Container>
  );
};

export default Header;
