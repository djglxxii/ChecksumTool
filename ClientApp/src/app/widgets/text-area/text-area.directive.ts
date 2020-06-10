import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2
}                       from '@angular/core';
import { NgControl }    from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[wgtTextArea]'
})
export class TextAreaDirective implements OnInit, OnDestroy {
  private _changesSub: Subscription;

  constructor(private readonly _elRef: ElementRef,
              private readonly _render: Renderer2,
              private readonly _control: NgControl) {
  }

  ngOnInit(): void {
    this.addClass('textarea');

    if (!this._control) {
      return;
    }

    this._changesSub = this._control.statusChanges.subscribe(status => {
      switch (status) {
        case 'INVALID':
          this.removeClass('is-success');
          this.addClass('is-danger');
          break;
        default:
          this.removeClass('is-danger');
          this.addClass('is-success');
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this._changesSub?.unsubscribe();
  }

  private addClass(css: string): void {
    this._render.addClass(this._elRef.nativeElement, css);
  }

  private removeClass(css: string): void {
    this._render.removeClass(this._elRef.nativeElement, css);
  }
}
