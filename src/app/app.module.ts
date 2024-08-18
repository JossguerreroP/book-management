import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {StoreModule} from '@ngrx/store';
import  {BookReducer} from './books/book.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({book:BookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
