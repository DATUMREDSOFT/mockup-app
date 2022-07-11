import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-formulario-gte',
  templateUrl: './formulario-gte.component.html',
  styleUrls: ['./formulario-gte.component.scss']
})
export class FormularioGteComponent implements OnInit {
  motivo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam dolorum rerum. Modi detur ullam velit rerum equuntur corrupti amet obcaecati!
  sas`;
    tipoViaje = '1';
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    enviarSolicitante(){
      alert('Solicitud enviada a solicitante');
      this.router.navigateByUrl('/reserva/gte');
    }

    regresar() {
      
      this.router.navigateByUrl('/reserva/gte');
    }
    regresar2() {
      alert('Solicitud Aprobada');
      this.router.navigateByUrl('/reserva/gte');
    }

    Rechazada() {
      alert('Solicitud Rechazada');
      this.router.navigateByUrl('/reserva/gte');
    }
  
    ngAfterViewInit(): void {
      $(document).ready(function () {
        $('.sidenav').sidenav();
        $('select').formSelect();
        $('.datepicker').datepicker();
      });
    }

}
