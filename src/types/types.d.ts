import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      secondary: string
      danger: string
      white: string
      gray: string
      lightGray: string
    },
    fontSizes: {
      title: Record<string, string>,
      text: Record<string, string>,
    }
  }
}
