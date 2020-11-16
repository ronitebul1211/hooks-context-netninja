import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
   return (
      <div className="App">
         <BooksContextProvider>
            <Navbar />
            <BookList />
         </BooksContextProvider>
      </div>
   );
}

export default App;
