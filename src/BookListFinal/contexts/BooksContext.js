import React, { createContext, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
   const [books, dispatch] = useReducer(BookReducer, []);

   return <BooksContext.Provider value={{ books, dispatch }}>{props.children}</BooksContext.Provider>;
};

export default BooksContextProvider;
