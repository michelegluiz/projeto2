import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
