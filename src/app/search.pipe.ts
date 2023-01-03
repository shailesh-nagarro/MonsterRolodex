import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './network/model/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Users[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
