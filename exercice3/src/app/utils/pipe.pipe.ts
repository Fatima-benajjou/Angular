import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(value: string [], parameter :string): string [] {
value.sort()
if (parameter == "desc") {
  value.reverse();
}
    return value;
  }

}
