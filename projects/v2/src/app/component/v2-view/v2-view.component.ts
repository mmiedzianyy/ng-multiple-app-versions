import { Component } from '@angular/core';
import { CounterService } from '../../../../../../src/app/counter.service';

@Component({
  selector: 'app-v2-view',
  templateUrl: './v2-view.component.html',
  styleUrls: ['./v2-view.component.scss']
})
export class V2ViewComponent {
  constructor(public readonly counterService: CounterService) {
    // this will fail and yield compilation errors
    let anyVar: any;
    let nestedAny: { prop: any };

    anyVar();
    anyVar.a.b();

    nestedAny.prop();
    nestedAny.prop['a']();

    new anyVar();
    new nestedAny.prop();

    anyVar`foo`;
    nestedAny.prop`foo`;
  }
}
