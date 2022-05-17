import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './global.css';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { lightTheme, darkTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const ThemeColor = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.3s ease-in-out;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ThemeColor />
        <Router />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
