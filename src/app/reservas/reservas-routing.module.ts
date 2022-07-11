import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './pages/area/area.component';
import { BrendaComponent } from './pages/brenda/brenda.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { FormularioAreaComponent } from './pages/formulario-area/formulario-area.component';
import { FormularioBrendaComponent } from './pages/formulario-brenda/formulario-brenda.component';
import { FormularioGteComponent } from './pages/formulario-gte/formulario-gte.component';
import { FormularioHistoricoComponent } from './pages/formulario-historico/formulario-historico.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { GteComponent } from './pages/gte/gte.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'formulario-historico', component: FormularioHistoricoComponent },
      { path: 'empleado', component: EmpleadoComponent },
      { path: 'area', component: AreaComponent },
      { path: 'gte', component: GteComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'formulario-brenda', component: FormularioBrendaComponent },
      { path: 'formulario-area', component: FormularioAreaComponent },
      { path: 'formulario-gte', component: FormularioGteComponent },
      { path: 'brenda', component: BrendaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
