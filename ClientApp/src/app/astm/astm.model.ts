import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
}                     from '@angular/forms';

@Injectable()
export class AstmModel extends FormGroup {
  get messageStr(): string {
    return this.get('messageStr').value;
  }

  set messageStr(val: string) {
    this.get('messageStr').setValue(val);
  }

  constructor() {
    super({
      messageStr: new FormControl('', Validators.required)
    });
  }
}
