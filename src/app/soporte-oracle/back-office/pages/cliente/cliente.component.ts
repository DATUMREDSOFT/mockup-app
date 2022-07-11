import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
  }



  lista:any[]=[
    {
      periodo:'2021-2022',
      contrato:251122,
      estado:'Activo',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2021-2022',
      contrato:99955,
      estado:'Activo',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2021-2022',
      contrato:98855,
      estado:'Activo',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2020-2021',
      contrato:5555555,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2020-2021',
      contrato:2222455,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2020-2021',
      contrato:444,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2019-2020',
      contrato:558224,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2019-2020',
      contrato:45521,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    },
    {
      periodo:'2018-2029',
      contrato:44552444,
      estado:'Vencido',
      vencimiento:'XX/XX/XXXX',
    }


  ];


}
