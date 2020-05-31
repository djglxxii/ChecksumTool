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
  private changesSub: Subscription;

  constructor(private readonly elRef: ElementRef,
              private readonly render: Renderer2,
              private readonly control: NgControl) {

  }

  ngOnInit(): void {
    const el = this.elRef.nativeElement;
    this.render.addClass(el, 'textarea');

    this.changesSub = this.control.statusChanges.subscribe(status => {
      switch (status) {
        case 'INVALID':
          this.render.removeClass(el, 'is-success');
          this.render.addClass(el, 'is-danger');
          break;
        default:
          this.render.removeClass(el, 'is-danger');
          this.render.addClass(el, 'is-success');
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.changesSub.unsubscribe();
  }
}
