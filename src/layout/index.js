import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const theme = {
    colors: {
      primary: `#0D1F2D`,
      secondary: `#17374F`,
      text: `#FFFFFF`,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
