import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Daniel Juarez';
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a:number = 0.234;

  salario = 1234.5;

  heroe={
    nombre:"Daniel",
    apellido:"Juarez",
    edad:22,
    direccion:{
      calle:"España",
      numero:5000,
      colonia:"Mundial"
    }
  }


valorPromesa = new Promise((resolve, reject)=>{
  setTimeout( ()=>resolve('LLego la data'),3500 );
})

fecha = new Date();

nombre2 = "dAnIel  jUaRez"

video = "KYElZJb09Qk";

}
