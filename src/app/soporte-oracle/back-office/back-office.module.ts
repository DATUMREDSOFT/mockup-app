import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ContratosApiService } from 'src/app/services/contratos-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CargarKitComponent } from './pages/cargar-kit/cargar-kit.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClienteComponent,
    FilterPipe,
    CargarKitComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers:[
    ContratosApiService
  ]
})
export class BackOfficeModule { }
