import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
   const [books, setBooks] = useState([
      { id: 1, title: "name of the wind", author: "patrick rothfuss" },
      { id: 2, title: "the final empire", author: "brandon sanderson" },
   ]);

   const addBook = (title, author) => {
      setBooks([...books, { title, author, id: uuid() }]);
   };

   const removeBook = (id) => {
      setBooks(books.filter((book) => book.id !== id));
   };
   return (
      <BooksContext.Provider value={{ books, addBook, removeBook }}>{props.children}</BooksContext.Provider>
   );
};

export default BooksContextProvider;
