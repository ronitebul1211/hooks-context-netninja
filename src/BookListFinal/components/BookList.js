import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookDetails from "./BookDetails";

const BookList = () => {
   const { books } = useContext(BooksContext);
   return books.length ? (
      <div>
         <ul>
            {books.map((book) => (
               <BookDetails book={book} key={book.id} />
            ))}
         </ul>
      </div>
   ) : (
      <div>No books to read</div>
   );
};

export default BookList;
