import { Component } from '@angular/core';
import { CounterService } from '../../../../../../src/app/counter.service';

@Component({
  selector: 'app-v2-view',
  templateUrl: './v2-view.component.html',
  styleUrls: ['./v2-view.component.scss']
})
export class V2ViewComponent {
  constructor(public readonly counterService: CounterService) {}
}
