import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './global.css';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';

const ThemeColor = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.3s ease-in-out;
}
`;

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <ThemeProvider theme={isToggled ? darkTheme : lightTheme}>
        <ThemeColor />
        <Router isToggled={isToggled} setIsToggled={setIsToggled} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
