import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyAppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavComponent } from './ui/nav/nav.component';
import { AutoCompleteComponent } from './ui/auto-complete/auto-complete.component';
import { ThatSweetAlertComponent } from './ui/that-sweet-alert/that-sweet-alert.component';
import { HomeComponent } from './ui/home/home.component';
import { RxoperatorsComponent } from './ui/rxoperators/rxoperators.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AutoCompleteComponent,
    ThatSweetAlertComponent,
    HomeComponent,
    RxoperatorsComponent,

  ],
  imports: [
    BrowserModule,
    MyAppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
