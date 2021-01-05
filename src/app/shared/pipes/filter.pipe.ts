import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchValue: string): any[] {
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
