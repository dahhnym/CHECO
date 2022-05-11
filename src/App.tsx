import { createGlobalStyle } from 'styled-components';
import './global.css';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';

const ThemeColor = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
`;

function App() {
  return (
    <>
      <ThemeColor />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
