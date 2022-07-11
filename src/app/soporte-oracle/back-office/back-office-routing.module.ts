import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarKitComponent } from './pages/cargar-kit/cargar-kit.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'clientes', component: ClienteComponent },
      { path: 'cargar-kit', component: CargarKitComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
