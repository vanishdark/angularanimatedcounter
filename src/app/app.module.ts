import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxAnimatedCounterModule} from '../../projects/ngx-animated-counter/src/lib/ngx-animated-counter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAnimatedCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
