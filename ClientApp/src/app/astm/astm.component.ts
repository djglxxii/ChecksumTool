import {
  Component,
  OnInit
}                      from '@angular/core';
import { AstmModel }   from './astm.model';
import { AstmService } from './astm.service';

@Component({
  selector: 'app-astm',
  templateUrl: './astm.component.html',
  styleUrls: ['./astm.component.scss'],
  providers: [
    AstmModel,
    AstmService
  ]
})
export class AstmComponent implements OnInit {

  segments: string[] = [];

  constructor(public readonly model: AstmModel,
              private readonly astmSvc: AstmService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.model.valid) {
      this.segments = this.astmSvc.getSegments(this.model.messageStr);
    }
  }

  onClear(): void {
    this.model.messageStr = '';
    this.segments = [];
  }
}
