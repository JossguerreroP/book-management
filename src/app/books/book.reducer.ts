import { createReducer, on} from "@ngrx/store";
import { AddBok,RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBok,(state, {id,title,author}) => [...state,{id,title,author}]),
    on(RemoveBook,(state, {bookId}) => state.filter(book => book.id !==bookId))
);
