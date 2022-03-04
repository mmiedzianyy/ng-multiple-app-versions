import { Component } from '@angular/core';
import { CounterService } from '../../../../../../src/app/counter.service';

@Component({
  selector: 'app-v1-view',
  templateUrl: './v1-view.component.html',
  styleUrls: ['./v1-view.component.scss']
})
export class V1ViewComponent {
  constructor(public readonly counterService: CounterService) {
    // this will fail but not yield compilation errors
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
