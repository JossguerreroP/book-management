import {createAction ,props} from "@ngrx/store";
import { Book } from "../models/book";
export const AddBok = createAction('[Book] Add Book',  props<Book>());
export const RemoveBook = createAction('[Book] Remove Book',  props<{bookId:string}>());