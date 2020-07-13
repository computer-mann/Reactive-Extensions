import { HeaderComponent } from './ui/header/header.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { RxoperatorsComponent } from './ui/rxoperators/rxoperators.component';
import { ThatSweetAlertComponent } from './ui/that-sweet-alert/that-sweet-alert.component';
import { AutoCompleteComponent } from './ui/auto-complete/auto-complete.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'rxoperators', component: RxoperatorsComponent},
  { path: 'sweet', component: ThatSweetAlertComponent},
  {path: 'autocomplete', component: AutoCompleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyAppRoutingModule { }
