import React, { createContext, Component } from "react";

/**
 ThemeContextProvider is wrapper for the consumer components tree.

 To Consume Context:
 # class component declare -> static contextType = ThemeContext;
   its look up components tree to the first element hold the provider for that context type -> ThemeContextProvider,
   its take the value property of the ThemeContext.Provider and attach it to component context (Navbar), 
   access by this.context
 
 # wrap component JSX with specific context consumer
  <ThemeContext.Consumer>
    {context => {
      return(
        Component JSX - can ref context
      )
    }}
  <ThemeContext.Consumer/>
  Pros: 1. can used class & functional components, 2. multiple consumer for one component

  # use useContext hook in functional component

  Let Consumer change context state:
  pass to value property reference to function that set state
 */
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
   state = {
      isLightTheme: true,
      light: { text: "#555", ui: "#ddd", bg: "#eee" },
      dark: { text: "#ddd", ui: "#333", bg: "#555" },
   };

   toggleTheme = () => {
      this.setState({ isLightTheme: !this.state.isLightTheme });
   };

   render() {
      return (
         <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
            {this.props.children}
         </ThemeContext.Provider>
      );
   }
}

export default ThemeContextProvider;
