import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    boxBgColor: string;
    accentColor: string;
    textColorBlack: string;
    hoverColor: string;
    boxShadow: string;
  }
}
