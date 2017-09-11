import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LOCALE_ID} from "@angular/core";
import {capitalizadoPipe} from "./pipes/capitalizado.pipe";

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:"es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
