import React, { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
   const { isLightTheme, light, dark } = useContext(ThemeContext);
   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
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
};

/** Consume Theme Context, Auth Context with class component */

// class Navbar extends Component {
//    render() {
//       return (
//          <AuthContext.Consumer>
//             {(authContext) => (
//                <ThemeContext.Consumer>
//                   {(themeContext) => {
//                      const { isLightTheme, light, dark } = themeContext;
//                      const { isAuthenticated, toggleAuth } = authContext;
//                      const theme = isLightTheme ? light : dark;
//                      return (
//                         <nav style={{ background: theme.bg, color: theme.text }}>
//                            <h1>Context App</h1>
//                            <div onClick={toggleAuth}>{isAuthenticated ? "logged in" : "logged out"}</div>
//                            <ul>
//                               <li>Home</li>
//                               <li>About</li>
//                               <li>Contact</li>
//                            </ul>
//                         </nav>
//                      );
//                   }}
//                </ThemeContext.Consumer>
//             )}
//          </AuthContext.Consumer>
//       );
//    }
// }

export default Navbar;
