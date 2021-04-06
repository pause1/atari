import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Network } from './network.service';
import { HandlerComponent } from './handler/handler.component';
import { PapersComponent } from './papers/papers.component';

@NgModule({
  declarations: [
    AppComponent,
    HandlerComponent,
    PapersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, Network],
  bootstrap: [AppComponent]
})
export class AppModule { }
