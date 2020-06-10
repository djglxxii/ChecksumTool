import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[wgtTable]'
})
export class TableDirective implements OnInit {

  constructor(private readonly _elRef: ElementRef,
              private readonly _render: Renderer2) {
  }

  ngOnInit(): void {
    this.addClass('table');
    this.addClass('is-bordered');
    this.addClass('is-hoverable');
    this.addClass('is-striped');
    this.addClass('is-narrow');
    this.addClass('is-fullwidth');
  }

  private addClass(css: string): void {
    this._render.addClass(this._elRef.nativeElement, css);

  }
}
