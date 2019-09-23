import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //return null;

    if(value == 0){
      return "In Stock1";
    }
    else{
      return "Out of Stock";
    }
  }

}
