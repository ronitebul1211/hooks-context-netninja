import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookDetails = ({ book }) => {
   const { removeBook } = useContext(BooksContext);
   return (
      <li
         onClick={() => {
            removeBook(book.id);
         }}>
         <div>Title: {book.title}</div>
         <div>Author :{book.author}</div>
      </li>
   );
};

export default BookDetails;
