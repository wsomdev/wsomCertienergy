import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home/homePage/home.component';

const routes: Routes = [{
  path: 'customer',
  loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule)
},
{
  path: 'home',
  pathMatch: 'full',
  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
},
{
  path: '**',
  pathMatch: 'full',
  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
