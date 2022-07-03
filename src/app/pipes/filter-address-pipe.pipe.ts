import { Address } from './../models/address';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAddressPipe'
})
export class FilterAddressPipePipe implements PipeTransform {

  transform(value: Address[], filterText:string): Address[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((a:Address)=>a.firstName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
