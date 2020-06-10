import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'EscapeControlCode'
})
export class EscapeControlCodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value !== 'string') {
      return value;
    }

    let str = '';

    for (let i = 0; i < value.length; i++) {
      let char = value[i];
      const charCode: number = char.charCodeAt(0);
      if (charCode >= 0 && charCode < 32) {
        char = '<' + charCode.toString(16).toUpperCase() + '>';
      }

      str += char;
    }

    return str;
  }
}
