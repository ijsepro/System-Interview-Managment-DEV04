import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './View/add/add.component';
import { RemoveComponent } from './View/company/remove/remove.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
