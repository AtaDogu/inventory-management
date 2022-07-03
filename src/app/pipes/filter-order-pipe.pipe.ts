import { Order } from './../models/order';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrderPipe'
})
export class FilterOrderPipePipe implements PipeTransform {

  transform(value: Order[], filterText:string): Order[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((o:Order)=>o.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
