import { Item } from './../models/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItemPipe'
})
export class FilterItemPipePipe implements PipeTransform {

  transform(value: Item[], filterText:string): Item[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((i:Item)=>i.sku.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
