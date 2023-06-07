import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaisComponent } from './pais/pais.component';
import { CapitalComponent } from './capital/capital.component';



const routes: Routes = [
  {path : '',component : PaisComponent},
  {path : 'pais',component : PaisComponent},
  {path: 'capital',component : CapitalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule {}
