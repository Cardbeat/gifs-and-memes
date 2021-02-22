import Routes from "./routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Coustard&display=swap');
  body,html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Coustard', serif;
  }
`;

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
