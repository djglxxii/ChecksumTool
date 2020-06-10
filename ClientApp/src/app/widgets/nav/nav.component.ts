import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'wgt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  title = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
