import { Component } from '@angular/core';
import { CounterService } from '../../../../../../src/app/counter.service';

@Component({
  selector: 'app-v1-view',
  templateUrl: './v1-view.component.html',
  styleUrls: ['./v1-view.component.scss']
})
export class V1ViewComponent {
  constructor(public readonly counterService: CounterService) { }
}
