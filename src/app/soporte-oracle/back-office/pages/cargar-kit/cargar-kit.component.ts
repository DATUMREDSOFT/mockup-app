import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-cargar-kit',
  templateUrl: './cargar-kit.component.html',
  styleUrls: ['./cargar-kit.component.scss']
})
export class CargarKitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('select').formSelect();
      $('.datepicker').datepicker();
    });
  }

  al(){
    alert('KIT Cargado con exito');
  }

}
