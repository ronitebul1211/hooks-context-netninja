import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookDetails = ({ book }) => {
   const { dispatch } = useContext(BooksContext);
   return (
      <li
         onClick={() => {
            dispatch({ type: "REMOVE_BOOK", id: book.id });
         }}>
         <div>Title: {book.title}</div>
         <div>Author :{book.author}</div>
      </li>
   );
};

export default BookDetails;
