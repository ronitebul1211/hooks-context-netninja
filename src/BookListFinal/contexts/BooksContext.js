import React, { createContext, useEffect, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

/**
 useReducer Hook get 3 argument
 - reference to reducer function
 - initial value
 - default value return from function
 */
export const BooksContext = createContext();

const BooksContextProvider = (props) => {
   //Init books from local storage data / empty array (no data)
   const [books, dispatch] = useReducer(BookReducer, [], () => {
      const localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
   });
   //When books change, save updated copy in local storage
   useEffect(() => {
      localStorage.setItem("books", JSON.stringify(books));
   }, [books]);

   return <BooksContext.Provider value={{ books, dispatch }}>{props.children}</BooksContext.Provider>;
};

export default BooksContextProvider;
