import {
  AfterViewInit,
  Directive,
  ElementRef
} from '@angular/core';

/**
 * Forces an element to be focused on init.
 */
@Directive({
  selector: '[wgtFocused]'
})
export class FocusedDirective implements AfterViewInit {

  constructor(private readonly _elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this._elRef.nativeElement.focus();
  }
}
