import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-brenda',
  templateUrl: './brenda.component.html',
  styleUrls: ['./brenda.component.scss']
})
export class BrendaComponent implements OnInit {

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
