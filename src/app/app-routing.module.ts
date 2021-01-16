import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'customer',
  loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule)
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
