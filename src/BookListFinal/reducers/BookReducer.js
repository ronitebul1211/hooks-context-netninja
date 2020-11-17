import { v1 as uuid } from "uuid";

export const BookReducer = (state, action) => {
   switch (action.type) {
      case "ADD_BOOK":
         return [
            ...state,
            {
               id: uuid(),
               author: action.book.author,
               title: action.book.title,
            },
         ];
      case "REMOVE_BOOK":
         return state.filter((book) => book.id !== action.id);
      default:
         return state;
   }
};
