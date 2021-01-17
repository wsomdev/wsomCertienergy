import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommissionComponent } from './commission/commission.component';

const routes: Routes = [
  {
    path: '',
    component: CommissionComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
