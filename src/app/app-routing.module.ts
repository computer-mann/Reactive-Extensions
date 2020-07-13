import { HeaderComponent } from './ui/header/header.component';
import { AppComponent } from './app.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: ' ', component : AppComponent},
  {path: 'header' , component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
