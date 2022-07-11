import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-gte',
  templateUrl: './gte.component.html',
  styleUrls: ['./gte.component.scss']
})
export class GteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }

}
