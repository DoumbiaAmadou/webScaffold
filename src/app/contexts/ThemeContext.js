
import React, { Component } from 'react';

const theme = {
  currenTheme: 'dark',
  themeList: ['Cyan', 'monolitique']
}

const ThemeContext = React.createContext(theme);
ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider = ({ children }) => {

  return (<ThemeContext.ThemeProvider value={theme}>
    {children}
  </ThemeContext.ThemeProvider>)
}

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
}

export const ContextThemeConsumer = ({ value }) => {
  return (
    <ThemeContext.Consumer>
      {
        ({ value }) => <Component theme={value} />
      }
    </ThemeContext.Consumer>
  )
}
export default ThemeContext;  
