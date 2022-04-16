import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ButtonsWrapper, Container, Content } from "./AppStyles";
import { Button } from "./components/Button";
import { closedTheme, openTheme } from "./theme";

const App = () => {
  // STATE
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDebugMode, setIsDebugMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isOpen ? openTheme : closedTheme}>
      <Container>
        <Content>
          <h1>Building a `BottomSheet` component</h1>
          <p>
            Click below to show the BottomSheet and plat with it's behavior!
          </p>
          <ButtonsWrapper>
            <Button
              title="Toggle BottomSheet"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            ></Button>
            <Button
              title="Toggle Debug Information"
              onClick={() => {
                setIsDebugMode(!isDebugMode);
              }}
            ></Button>
          </ButtonsWrapper>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
