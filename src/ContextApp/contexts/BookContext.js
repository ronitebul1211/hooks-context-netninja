import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
      { title: "The way of kings", id: 1 },
      { title: "The name of the wind", id: 2 },
      { title: "The Final Empire", id: 3 },
      { title: "The Hero of ages", id: 4 },
   ]);
   return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
