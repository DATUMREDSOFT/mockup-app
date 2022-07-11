import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-formulario-area',
  templateUrl: './formulario-area.component.html',
  styleUrls: ['./formulario-area.component.scss']
})
export class FormularioAreaComponent implements OnInit, AfterViewInit {

  motivo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam dolorum rerum. Modi detur ullam velit rerum equuntur corrupti amet obcaecati!
  sas`;
    tipoViaje = '1';
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    enviarSolicitante(){
      alert('Solicitud enviada a solicitante');
      this.router.navigateByUrl('/reserva/area');
    }

    regresar() {
      
      this.router.navigateByUrl('/reserva/area');
    }
    regresar2() {
      alert('Solicitud Aprobada');
      this.router.navigateByUrl('/reserva/area');
    }

    Rechazada() {
      alert('Solicitud Rechazada');
      this.router.navigateByUrl('/reserva/area');
    }
  
    ngAfterViewInit(): void {
      $(document).ready(function () {
        $('.sidenav').sidenav();
        $('select').formSelect();
        $('.datepicker').datepicker();
      });
    }

}
