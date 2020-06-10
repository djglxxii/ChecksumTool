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

  /**
   * If true, prepend ENQ and append EOT control codes.
   */
  get includeEnqEot(): boolean {
    return this.get('includeEnqEot').value;
  }

  set includeEnqEot(val: boolean) {
    this.get('includeEnqEot').setValue(val);
  }

  constructor() {
    super({
      messageStr: new FormControl('', Validators.required),
      includeEnqEot: new FormControl(true)
    });
  }
}
