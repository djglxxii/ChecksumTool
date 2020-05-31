import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'EscapeControlCode'
})
export class EscapeControlCodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let message: string = value;

    for (let i = 0; i < 31; i++) {
      const hex = '<' + i.toString(16).toUpperCase() + '>';

      const regex = new RegExp(String.fromCharCode(i), 'g');
      message = message.replace(regex, hex);
    }


    return message;
  }
}
