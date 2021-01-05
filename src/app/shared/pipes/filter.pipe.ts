import { Pipe, PipeTransform } from '@angular/core';
import { Exhibitor } from '../interfaces/exhibitor.interface';

@Pipe({ name: 'exhibitorFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: Exhibitor[], searchValue: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchValue) {
      return items;
    }
    searchValue = searchValue.toLocaleLowerCase();

    return items.filter(item => {
      for (const tag of item.tags) {
        const found = tag.tag.toLocaleLowerCase().includes(searchValue);
        if (found) {
          return true;
        }
      }
      return item.title.toLocaleLowerCase().includes(searchValue);
    });
  }
}
