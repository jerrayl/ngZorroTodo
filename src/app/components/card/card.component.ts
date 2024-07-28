import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  imports: [NzCardModule],
  standalone: true
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}