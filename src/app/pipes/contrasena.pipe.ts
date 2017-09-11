import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible:boolean=true): any {

    let pass:string = "";

    if(visible){
      pass=value;
    }else{
      for(let a=0; a < value.length;a++){
        pass += "*";
      }
    }

    return pass;
  }

}
