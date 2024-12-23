import { createContext, useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext()

const ThemeProvider = ({children}) => {
      const [theme, setTheme] = useState('light');

      return (
            <themeContext.Provider  value={{theme,setTheme}} >
                  {children}
            </themeContext.Provider>
      );
};

export default ThemeProvider;

ThemeProvider.propTypes ={
      children:PropTypes.object.isre
}