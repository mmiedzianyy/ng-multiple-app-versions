import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counterValue$: Observable<number>;

  constructor(counterService: CounterService) {
    this.counterValue$ = counterService.getCurrentValue$();
  }
}
