import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-formulario-historico',
  templateUrl: './formulario-historico.component.html',
  styleUrls: ['./formulario-historico.component.scss']
})
export class FormularioHistoricoComponent implements OnInit {

  motivo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam dolorum rerum. Modi detur ullam velit rerum equuntur corrupti amet obcaecati!
  sas`;
    tipoViaje = '1';
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    enviarSolicitante(){
      alert('Solicitud enviada a solicitante');
      this.router.navigateByUrl('/reserva/brenda');
    }

    regresar() {
      
      this.router.navigateByUrl('/reserva/brenda');
    }
    regresar2() {
      alert('Solicitud Aprobada');
      this.router.navigateByUrl('/reserva/brenda');
    }

    Rechazada() {
      alert('Solicitud Rechazada');
      this.router.navigateByUrl('/reserva/brenda');
    }
  
    ngAfterViewInit(): void {
      $(document).ready(function () {
        $('.sidenav').sidenav();
        $('select').formSelect();
        $('.datepicker').datepicker();
      });
    }

}
