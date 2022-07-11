import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('select').formSelect();
    });
  }

}
