import React from "react";
import Navbar from "./components/Navbar";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
   return (
      <div className="App">
         <BooksContextProvider>
            <Navbar />
         </BooksContextProvider>
      </div>
   );
}

export default App;
