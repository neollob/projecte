import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then(mod => mod.CustomersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'suppliers',
    loadChildren: () =>
      import('./suppliers/suppliers.module').then(mod => mod.SuppliersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./stock/stock.module').then(mod => mod.StockModule),
    canActivate: [AuthGuard]
  },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
