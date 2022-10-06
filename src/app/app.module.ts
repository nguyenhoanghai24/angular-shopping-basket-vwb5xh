import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
