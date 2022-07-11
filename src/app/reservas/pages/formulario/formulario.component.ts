import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  motivo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam dolorum rerum. Modi detur ullam velit rerum equuntur corrupti amet obcaecati!
sas`;
  tipoViaje = '1';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regresar() {
    alert('Solicitud enviada');
    this.router.navigateByUrl('/empleado');
  }
  regresar2() {
    this.router.navigateByUrl('/empleado');
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('select').formSelect();
      $('.datepicker').datepicker();
    });
  }

}
