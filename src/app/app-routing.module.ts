import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { AcessarContaComponent } from './components/templates/conta/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/templates/conta/criar-conta/criar-conta.component';
import { DashboardComponent } from './components/templates/conta/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'acessar-conta', component: AcessarContaComponent},
  { path: 'abrir-conta', component: CriarContaComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
