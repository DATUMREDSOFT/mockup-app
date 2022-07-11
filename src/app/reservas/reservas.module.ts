import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { AreaComponent } from './pages/area/area.component';
import { GteComponent } from './pages/gte/gte.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { FormularioHistorialComponent } from './pages/formulario-historial/formulario-historial.component';
import { FormularioBrendaComponent } from './pages/formulario-brenda/formulario-brenda.component';
import { BrendaComponent } from './pages/brenda/brenda.component';
import { FormularioAreaComponent } from './pages/formulario-area/formulario-area.component';
import { FormularioGteComponent } from './pages/formulario-gte/formulario-gte.component';
import { FormularioHistoricoComponent } from './pages/formulario-historico/formulario-historico.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    AreaComponent,
    GteComponent,
    FormularioComponent,
    FormularioHistorialComponent,
    FormularioBrendaComponent,
    BrendaComponent,
    FormularioAreaComponent,
    FormularioGteComponent,
    FormularioHistoricoComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    FormsModule
  ]
})
export class ReservasModule { }
