import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'clientes',
    loadChildren: () => import('./soporte-oracle/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'datum',
    loadChildren: () => import('./soporte-oracle/back-office/back-office.module').then(m => m.BackOfficeModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reservas/reservas.module').then(m => m.ReservasModule)
  },
  { path: '**', redirectTo: '/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
