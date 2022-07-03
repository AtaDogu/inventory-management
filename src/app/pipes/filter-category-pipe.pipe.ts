import { Category } from './../models/category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategoryPipe'
})
export class FilterCategoryPipePipe implements PipeTransform {

  transform(value: Category[], filterText:string): Category[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Category)=>c.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
