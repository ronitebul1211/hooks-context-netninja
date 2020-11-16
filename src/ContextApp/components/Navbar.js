import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
   render() {
      return (
         <AuthContext.Consumer>
            {(authContext) => (
               <ThemeContext.Consumer>
                  {(themeContext) => {
                     const { isLightTheme, light, dark } = themeContext;
                     const { isAuthenticated, toggleAuth } = authContext;
                     const theme = isLightTheme ? light : dark;
                     return (
                        <nav style={{ background: theme.bg, color: theme.text }}>
                           <h1>Context App</h1>
                           <div onClick={toggleAuth}>{isAuthenticated ? "logged in" : "logged out"}</div>
                           <ul>
                              <li>Home</li>
                              <li>About</li>
                              <li>Contact</li>
                           </ul>
                        </nav>
                     );
                  }}
               </ThemeContext.Consumer>
            )}
         </AuthContext.Consumer>
      );
   }
}

export default Navbar;
