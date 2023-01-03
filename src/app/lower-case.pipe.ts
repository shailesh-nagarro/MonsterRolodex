import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCaseApp'
})
export class LowerCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toLowerCase();
  }

}
