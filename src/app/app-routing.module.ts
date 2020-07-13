import { HeaderComponent } from './ui/header/header.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'header' , component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
