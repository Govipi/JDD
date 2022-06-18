import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JddChoiceComponent } from './jdd-choice/jdd-choice.component';
import {FormsModule} from "@angular/forms";
import { JddCreateComponent } from './jdd-create/jdd-create.component';

@NgModule({
  declarations: [
    AppComponent,
    JddChoiceComponent,
    JddCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
