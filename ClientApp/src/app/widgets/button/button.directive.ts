import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

declare type size = 'small' | 'normal' | 'large';

@Directive({
  selector: '[wgtButton]'
})
export class ButtonDirective implements OnInit {
  @Input()
  type = '';

  @Input()
  size: size;

  constructor(private readonly _elRef: ElementRef,
              private readonly _render: Renderer2) {
  }

  ngOnInit(): void {
    this.addClass('button');
    this.addClass('is-rounded');

    switch (this.type) {
      case 'submit':
        this.addClass('is-success');
        break;
      case 'reset':
        this.addClass('is-danger');
        break;
      default:
        this.addClass('is-primary');
    }

    switch (this.size) {
      case 'normal':
        this.addClass('is-normal');
        break;
      case 'large':
        this.addClass('is-large');
        break;
      default:
        this.addClass('is-small');
        break;
    }
  }

  private addClass(css: string): void {
    this._render.addClass(this._elRef.nativeElement, css);
  }
}
