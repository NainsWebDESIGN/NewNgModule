import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: any): string {
    let routerObj = {
      "/body/body1": "BodyOne",
      "/body": "BodyOne",
      "/body/body2": "BodyTwo",
      "/about": "About"
    }
    return routerObj[value];
  }

}
