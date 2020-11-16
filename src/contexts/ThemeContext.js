import React, { createContext, Component } from "react";

/**
 ThemeContextProvider is wrapper for the consumer components tree.

 the consumer -> navbar declare in his class -> static contextType = ThemeContext;
 then its look up components tree to the first element hold the provider for these context type -> ThemeContextProvider,
 its take the value property of the ThemeContext.Provider and attach it to component context (Navbar), 
 access by this.context

 */
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
   state = {
      isLightTheme: true,
      light: { text: "#555", ui: "#ddd", bg: "#eee" },
      dark: { text: "#ddd", ui: "#333", bg: "#555" },
   };

   render() {
      return <ThemeContext.Provider value={{ ...this.state }}>{this.props.children}</ThemeContext.Provider>;
   }
}

export default ThemeContextProvider;
