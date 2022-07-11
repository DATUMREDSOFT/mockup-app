import { Component, OnInit } from '@angular/core';
import { ContratosApiService } from 'src/app/services/contratos-api.service';
import { agrupar, sumar } from 'src/app/utils/utils';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: any = {
    estado: [
      "All"
    ],
    paises: [
      "El Salvador", "Honduras", "Pánama"
    ]
  }

  search = '';
  p: number = 1;

  lista: any[] = [];
  constructor(private api: ContratosApiService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.changeSelects();
  }

  changeSelects() {
    this.api.getAll().subscribe(response => {
      this.lista=[];
      this.formulario.estado=[];
      this.search='';

      for (let d of response) {
        if (d.estado != 'Vencido') {
          this.lista.push(d);
        }
      }

      let nueva: any[] = [];
      for (let l of this.lista) {
        for (let p of this.formulario.paises) {
          if (l.pais == p) {
            nueva.push(l);
          }
        }
      }
      this.lista = nueva;

      $(document).ready(function () {
   
        $('#estado').formSelect();
      });
    });

   

  }

  changeSelectsEstado() {
    let nueva: any[] = [];
    this.api.getAll().subscribe(response => {
      this.lista=[];
     

      for (let d of response) {
        if (d.estado != 'Vencido') {
          this.lista.push(d);
        }
      }

     
      for (let l of this.lista) {
        for (let p of this.formulario.paises) {
          if (l.pais == p) {
            nueva.push(l);
          }
        }
      }

      let nueva2: any[] = [];
      for (let l of nueva) {
        for (let e of this.formulario.estado) {
          if (l.estado == e) {
            nueva2.push(l);
          }
        }

      }
      this.lista = nueva2;
      
    });

    if(this.formulario.estado.length==0){
      this.changeSelects();
    }

   
    

      
      
   

  }

  suma(array: any[], campo: string) {
    return sumar(array, campo)
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('select').formSelect();
      $('.modal').modal();
    });
  }





}
