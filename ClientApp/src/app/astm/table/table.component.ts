import {
  Component,
  Input,
  OnInit
}                                from '@angular/core';
import { ClipboardService }      from '../../shared/clipboard.service';
import { EscapeControlCodePipe } from '../../shared/escape-control-code.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private readonly _ecc: EscapeControlCodePipe = new EscapeControlCodePipe();

  @Input()
  segments: string[] = [];
  
  constructor(private readonly _clipboardSvc: ClipboardService) {
  }

  ngOnInit(): void {
  }

  onCopyAll(): void {
    let all = '';
    this.segments.forEach(segment => {
      all += this._ecc.transform(segment);
      all += '\r';
    });

    this._clipboardSvc.copyToClipboard(all);
  }

  onCopyRow(segment: string): void {
    const escaped = this._ecc.transform(segment);
    this._clipboardSvc.copyToClipboard(escaped);
  }
}

