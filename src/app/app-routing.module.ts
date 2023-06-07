import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [
  { path : '', redirectTo :'/api/pais', pathMatch : 'full'},
  {path : '**' , redirectTo : '/api/pais'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
